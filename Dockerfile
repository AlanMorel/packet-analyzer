FROM node:alpine as builder

RUN apk add --update --no-cache openssl1.1-compat

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

COPY . .

RUN pnpm ts:check && pnpm build

ENV NODE_ENV production

FROM nginx:alpine as base

ARG ENV

COPY --from=builder /app/dist /usr/share/nginx/html/packet-analyzer

COPY ./nginx/nginx.${ENV}.conf /etc/nginx/nginx.conf
