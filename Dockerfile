FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

# Копируем env внутрь (если нужен для билда)
COPY .env ./.env

COPY . .
RUN npm run build

FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
