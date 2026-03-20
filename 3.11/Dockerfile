# Этап сборки
FROM node:16-alpine AS build-stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Финальный этап
FROM node:16-alpine
WORKDIR /usr/src/app
COPY --from=build-stage /usr/src/app ./
RUN adduser -D appuser && chown -R appuser /usr/src/app
USER appuser
EXPOSE 8080
CMD ["npm", "start"]