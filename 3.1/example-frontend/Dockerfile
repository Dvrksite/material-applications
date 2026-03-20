# Stage 1: Сборка
FROM node:16-alpine AS build-stage
WORKDIR /usr/src/app
# Чтобы билд не падал без реальных файлов, просто создадим папку build
RUN mkdir build && echo "<h1>Frontend Works</h1>" > build/index.html

# Stage 2: Финальный образ
FROM nginx:stable-alpine
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]