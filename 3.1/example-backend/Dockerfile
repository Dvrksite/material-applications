FROM node:16-alpine
WORKDIR /usr/src/app
# Создаем простой файл-заглушку прямо внутри образа
RUN echo "console.log('Backend is running')" > index.js
EXPOSE 8080
CMD ["node", "index.js"]