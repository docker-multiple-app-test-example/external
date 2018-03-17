FROM node:8.9.4-alpine

RUN mkdir -p /projects/external
WORKDIR /projects/external

COPY package.json package-lock.json* ./
RUN npm install && npm cache clean --force

COPY . /projects/external

CMD ["node", "src/index.js"]

