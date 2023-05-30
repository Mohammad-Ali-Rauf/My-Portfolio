# Stage 1: Build the application
FROM node:14-alpine as builder
WORKDIR /app

# Install Python and other required dependencies
RUN apk add --no-cache python3 make g++
RUN ln -sf /usr/bin/python3 /usr/bin/python

COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Stage 2: Serve the application with nginx
FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
