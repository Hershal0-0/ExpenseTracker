FROM node:14.10.1

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production
ENV PORT=5000
ENV MONGO_USERNAME=root
ENV MONGO_PASS=pass

EXPOSE 5000

CMD ["npm", "run", "docker-build-webapp"]