# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm ci

# Set VITE_TARGETED_URL if passed as a build argument
ARG VITE_TARGETED_URL
ENV VITE_TARGETED_URL=${VITE_TARGETED_URL}

# Copy application files
COPY . .

# Build the frontend using Vite
RUN npm run build

# Production stage (using npm run preview to serve the build)
FROM node:20-alpine

# Set working directory for the production stage
WORKDIR /app

# Install dependencies for the preview (this will install vite and any other required dependencies)
COPY package*.json ./
RUN npm install --production

# Copy the build output from the build stage
COPY --from=build /app/dist /app/dist

# Expose port 8080
EXPOSE 8080

# Run npm run preview to serve the built files, and specify port 8080
CMD ["npm", "run", "preview", "--", "--port", "8080"]
