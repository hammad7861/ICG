FROM nginx:stable-alpine

# Copy Nginx configuration
COPY conf.d/default.conf /etc/nginx/conf.d/default.conf

# Copy the built websites (CRA and Vite) from the previous build stages
COPY --from=build /app/website/build /usr/share/nginx/html/website
COPY --from=build /app/dashboard/dist /usr/share/nginx/html/dashboard

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
