FROM node:22-alpine AS build
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm ci
COPY docs ./docs
RUN npm run docs:build

FROM nginx:stable-alpine
COPY deploy/sealos/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /src/docs/.vitepress/dist /usr/share/nginx/html
USER 101:101
EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]
