# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the application files and build the frontend
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine

# Install serve globally
RUN npm install -g serve

# Set the working directory
WORKDIR /usr/src/app

# Copy the built files from the build stage
COPY --from=build /app/build /usr/src/app/build

# Expose port 80 for the application
EXPOSE 80

# Use serve to serve the build folder
CMD ["serve", "-s", "build", "-l", "80"]
