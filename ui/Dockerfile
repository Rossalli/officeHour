
FROM node:14.16.1-alpine3.13
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent
COPY . . 
EXPOSE 3000
CMD ["npm", "start"]
