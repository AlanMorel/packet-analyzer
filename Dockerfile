FROM node:alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN npx browserslist@latest --update-db && rm -rf node_modules && yarn install --production=true --frozen-lockfile && yarn cache clean

COPY . .

RUN yarn build && yarn storybook:build

FROM nginx:alpine as base

ARG ENV

COPY --from=builder /app/dist /usr/share/nginx/html/packet-analyzer

COPY ./nginx/nginx.${ENV}.conf /etc/nginx/nginx.conf
