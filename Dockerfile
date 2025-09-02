# ---- Сборка ----
FROM node:20-alpine AS builder

WORKDIR /app

# Устанавливаем зависимости
COPY package*.json ./
RUN npm ci

# Копируем исходники и билдим
COPY . .
RUN npm run build

# ---- Запуск ----
FROM node:20-alpine AS runner

WORKDIR /app

# Копируем только нужное из билда
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

# Nuxt запускается напрямую через .output
CMD ["node", ".output/server/index.mjs"]
