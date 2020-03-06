# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install and cache app dependencies
COPY . ./
RUN npm install --silent

# start app
EXPOSE 3000
CMD ["npm", "start"]

