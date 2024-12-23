FROM nginx:stable-alpine

# Install dependencies for healthcheck
RUN apk add --no-cache curl

COPY conf.d/default.conf /etc/nginx/conf.d/default.conf

# Create necessary directories
RUN mkdir -p /usr/share/nginx/html/website \
    && mkdir -p /usr/share/nginx/html/dashboard

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
