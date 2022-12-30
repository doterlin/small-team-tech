FROM node:lts-alpine as builder

WORKDIR /

COPY / /

RUN npm install --registry=https://registry.npm.taobao.org
RUN npm run build

FROM nginx:alpine

COPY /nginx.conf /etc/nginx/
COPY --from=builder /dist/ /project/demo-dockerfile/

# 暴露端口
EXPOSE 80