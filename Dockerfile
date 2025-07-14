# Step 1: Build the backend app
FROM node:18 AS build

# Set the working directory for the backend
WORKDIR /backend

# Copy package.json and package-lock.json (or yarn.lock) for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your backend code
COPY . .

# Expose port 5000
EXPOSE 5000

# Run the backend application
CMD ["npm", "start"]
