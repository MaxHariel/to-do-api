FROM node:lts-alpine3.11

RUN apk add --no-cache bash

RUN npm i -g @nestjs/cli@7.6.0

USER node

WORKDIR /home/node/app