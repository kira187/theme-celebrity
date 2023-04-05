FROM nginx:stable-alpine
COPY ./src /usr/share/nginx/html/src
COPY ./src/img /usr/share/nginx/html/src/src/img
COPY ./dist /usr/share/nginx/html/src/dist
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]