FROM node:alpine as node

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/todo-ng /usr/share/nginx/html