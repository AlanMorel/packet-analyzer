FROM node:20.1.0-alpine AS base

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm install -g pnpm@8.9.0

FROM base AS deps

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

FROM base AS builder

COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN pnpm ts:check && pnpm build && pnpm storybook:build

FROM nginx:alpine AS app

COPY --from=builder /app/dist /usr/share/nginx/html/packet-analyzer

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
