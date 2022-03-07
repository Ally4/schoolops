FROM node:17-alpine3.14
WORKDIR /app
COPY package.json /app
RUN npm install 
ENV PORT=1234
COPY . /app
EXPOSE 1234
CMD ["npm", "start"]