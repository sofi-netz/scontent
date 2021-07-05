FROM node:14.17.0-alpine

RUN mkdir /app && \
  chown node:node /app

WORKDIR /app

USER node

COPY package.json package-lock.json /app/

RUN npm install

COPY . .

ENTRYPOINT ["npm"]

# Angular's default port
EXPOSE 4200
