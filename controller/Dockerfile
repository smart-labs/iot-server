FROM node:alpine
RUN mkdir /usr/app
WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn
COPY . ./

EXPOSE 3000