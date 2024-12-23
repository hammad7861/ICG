FROM nginx:stable-alpine

# Install dependencies for healthcheck and permissions management
RUN apk add --no-cache curl

# Copy Nginx configuration
COPY conf.d/default.conf /etc/nginx/conf.d/default.conf

# Create necessary directories for website and dashboard
RUN mkdir -p /usr/share/nginx/html/website \
    && mkdir -p /usr/share/nginx/html/dashboard

# Set the owner of the directories to the nginx user
RUN chown -R nginx:nginx /usr/share/nginx/html

# Set the proper permissions on these directories to allow Nginx access
RUN chmod -R 755 /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
