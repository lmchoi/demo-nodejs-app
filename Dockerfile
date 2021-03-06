FROM node:carbon

# Create app directory
WORKDIR /app

RUN npm install -g nodemon babel-cli babel-preset-env
# RUN npm install -g nodemon babel-cli babel-core babel-preset-env webpack jest jest-cli eslint eslint-plugin-import eslint-plugin-jest eslint-plugin-node --save-dev

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY src /app

EXPOSE 8080
CMD [ "npm", "start" ]
