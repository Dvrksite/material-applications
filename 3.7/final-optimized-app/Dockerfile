# --- ЭТАП 1: СБОРКА (Build Stage) ---
FROM node:16-alpine AS build-stage

WORKDIR /usr/src/app

COPY package*.json ./
# Устанавливаем ВСЕ зависимости для сборки
RUN npm install 

COPY . .
# Если бы это был React/Frontend, тут был бы npm run build
# Для простого бэкенда мы просто готовим файлы


# --- ЭТАП 2: ФИНАЛЬНЫЙ ОБРАЗ (Production Stage) ---
FROM node:16-alpine

WORKDIR /usr/src/app

# 1. БЕЗОПАСНОСТЬ: Создаем пользователя (как в 3.5)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# 2. ОПТИМИЗАЦИЯ: Копируем ТОЛЬКО нужные файлы из первого этапа
# Мы не копируем кэш npm и исходники, только самое важное
COPY --from=build-stage /usr/src/app/package*.json ./
COPY --from=build-stage /usr/src/app/index.js ./

# Устанавливаем только продакшн-зависимости (без лишнего мусора)
RUN npm install --only=production

# 3. ПРАВА: Отдаем владение папкой нашему пользователю
RUN chown -R appuser:appgroup /usr/src/app

# 4. ПЕРЕКЛЮЧЕНИЕ: Запускаем от имени не-root пользователя
USER appuser

EXPOSE 8080

CMD ["node", "index.js"]