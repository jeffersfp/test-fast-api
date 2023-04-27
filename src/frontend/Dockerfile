FROM node:18.16.0-alpine3.16 as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.23.4-alpine3.17
COPY --from=builder /app/build /usr/share/nginx/html
# COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
