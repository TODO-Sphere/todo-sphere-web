FROM node:alpine as node

WORKDIR /db

COPY ./data/db.json ./

RUN npm install -g json-server

EXPOSE 3000

CMD ["json-server", "-H", "0.0.0.0", "db.json"]