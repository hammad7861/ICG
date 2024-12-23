# Build stage
FROM node:20-alpine AS builder

# Install build tools required for bcrypt
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy application files
COPY . .

# Production stage
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Build-time arguments
ARG APP_PORT=3000
ARG NODE_ENV=production

# Set environment variables
ENV APP_PORT=${APP_PORT}
ENV NODE_ENV=${NODE_ENV}

# Copy built node modules and application files
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app .

# Expose port
EXPOSE ${APP_PORT}

# Start the application
CMD ["yarn", "start"]
