FROM node:20.18

RUN apt-get update && apt-get install -y iputils-ping

WORKDIR /app

COPY package*.json .

RUN npm install 

COPY . .

CMD ["npm", "start"]