# base node image
FROM node:lts-alpine

# set the current working directory
WORKDIR /usr/src/app

# set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080

# copy 'package.json' and 'yarn.lock'
COPY package.json .
COPY yarn.lock .

# install production dependencies
RUN yarn install

# copy local code to the container image
COPY . .

# build strapi
RUN yarn build

# make the container port accessible externally
EXPOSE 8080

# run the web service on container startup
CMD [ "yarn", "start" ]