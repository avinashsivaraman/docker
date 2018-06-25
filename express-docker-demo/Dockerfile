FROM node
WORKDIR /usr/src
COPY package.json ./
RUN npm install
COPY ./app ./app
EXPOSE 9443
CMD [ "node", "app/server.js" ]