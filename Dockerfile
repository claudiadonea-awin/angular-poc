# Stage 0, based on Node.js, to build and compile Angular
FROM node:8.9 as node
WORKDIR /app
COPY package.json /app/
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN sudo apt-get update && sudo apt-get install yarn
RUN yarn install
COPY ./ /app/
ARG env=prod
RUN npm run build -- --prod --environment $env;

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.10.3
COPY --from=node /app/dist/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf