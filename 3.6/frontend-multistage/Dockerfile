# --- ЭТАП 1: СБОРКА (Build stage) ---
FROM node:16-alpine AS build-stage

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
# Запускаем сборку проекта (создает папку build или dist)
RUN npm run build 


# --- ЭТАП 2: ЗАПУСК (Production stage) ---
FROM nginx:1.19-alpine

# Копируем только готовый результат сборки из первого этапа
# Мы берем файлы из /usr/src/app/build первого образа и кладем в папку Nginx
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

# Помним про безопасность из 3.5! 
# Nginx в Alpine обычно имеет пользователя nginx
USER nginx

EXPOSE 80

# Nginx запускается автоматически, команда CMD не обязательна, но можно оставить:
CMD ["nginx", "-g", "daemon off;"]