# Use the official NestJS image as the base image
FROM node:18-alpine

# # Set the working directory inside the Docker container
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the NestJS application
# RUN npm run build

# # Expose the application port
# EXPOSE 3000

# # Command to run the application
# CMD ["npm", "run", "start:prod"]
