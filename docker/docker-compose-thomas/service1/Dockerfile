FROM node:8.4-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD yarn start
EXPOSE 3001 