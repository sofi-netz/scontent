FROM node:14.17.0-alpine

RUN apk --no-cache add shadow rsync && \
  mkdir /app && \
  chown node:node /app

WORKDIR /app

USER node

COPY package.json package-lock.json /app/

RUN npm install --loglevel=error

COPY .  /app/

# Angular's default port
EXPOSE 4200

ENTRYPOINT ["npm"]
