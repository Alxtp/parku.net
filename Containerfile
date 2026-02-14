ARG BUN_VERSION="1.3.9"
FROM docker.io/oven/bun:${BUN_VERSION}-alpine AS base
WORKDIR /app

FROM base AS build
COPY . ./

RUN bun install --production
RUN bun run build

FROM base

COPY --from=build /app/.output/ ./

ENTRYPOINT [ "bun", "/app/server/index.mjs" ]