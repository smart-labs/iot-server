from node:alpine

workdir /usr/app
env PATH $PATH:node_modules/.bin

copy package.json ./
run yarn
copy . .

expose 5000
cmd ["yarn", "start"]