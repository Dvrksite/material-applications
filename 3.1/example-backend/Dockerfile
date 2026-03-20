FROM node:16-alpine
WORKDIR /usr/src/app
# Просто создаем пустой файл, чтобы контейнеру было что запускать
RUN echo "console.log('Backend optimized')" > index.js
EXPOSE 8080
CMD ["node", "index.js"]