FROM node:8.15-alpine
WORKDIR /app
# COPY package.json /app
COPY . /app
RUN yarn install
CMD yarn start
EXPOSE 3000