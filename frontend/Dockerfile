# Use official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install all the dependencies
RUN npm install

# Copy the rest of the code to the container
COPY . .

# Expose port 5173 for the application
EXPOSE 5173

# Command to run the app using npm
CMD ["npm", "run", "dev"]
