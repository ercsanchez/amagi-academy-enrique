FROM node:8.15-alpine
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
CMD yarn start
EXPOSE 5000