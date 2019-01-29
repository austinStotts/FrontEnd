FROM node:10.15
RUN mkdir -p /usr/src/myApp
WORKDIR /usr/src/myApp
COPY package.json /usr/src/myApp
RUN npm install
COPY . .
EXPOSE 3000

CMD ["npm", "start"]