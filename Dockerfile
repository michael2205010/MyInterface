FROM oven/bun:1.2.2 AS builder
WORKDIR /app

COPY ./package*.json ./
RUN bun install
COPY ./ .
RUN bun run build

RUN groupadd -r appgroup && useradd -r -g appgroup -m appuser

USER appuser

FROM nginx:1.27.0-perl
COPY --from=builder /app/dist /etc/nginx/html

# COPY --from=builder /app/dist /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
