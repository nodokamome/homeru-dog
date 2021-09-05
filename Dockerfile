FROM node:12

WORKDIR /usr/app

COPY package*.json ./
RUN yarn

ENV TZ=Asia/Tokyo

COPY app/ /usr/src/app

RUN yarn compile

ENV NODE_ENV=production

CMD yarn compile && yarn start
