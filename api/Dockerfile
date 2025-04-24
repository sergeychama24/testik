FROM node:22-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install -g json-server
COPY db.json .

EXPOSE 3000
CMD ["json-server", "--host", "0.0.0.0", "--port", "3000", "db.json"]