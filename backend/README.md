# options-backend README

## Description

The `options-backend` is a specialized database designed to manage and track option contracts of interest, including those being actively purchased or held. It serves as the core backend system, facilitating the storage, retrieval, and management of option contract data in an efficient and organized manner.

## Features

- **Database Management:** Centralizes information on option contracts of interest, purchased options, and holdings.
- **Real-Time Updates:** Utilizes `nodemon` for hot reloading during development, ensuring immediate feedback on any changes.
- **RESTful API:** Leverages `express` and `rest` for creating a scalable and easily accessible API.
- **Environment Variables:** Incorporates `dotenv` for managing environment variables, enhancing security and configurability.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- MongoDB set up either locally or in the cloud for database services.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate into the repository directory:
   ```bash
   cd options-backend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Set up your `.env` file with the necessary environment variables (e.g., database connection strings).

5. Start the application:
   ```bash
   npm start
   ```

## Usage

The main entry point for the application is `options-controller.mjs`. This module is responsible for initializing the Express application, setting up routes, and connecting to MongoDB using Mongoose.

### Available Scripts

- `npm start`: Runs the app in development mode with `nodemon`, automatically restarting the server upon file changes.
- `npm test`: Currently, no tests are specified. Customize this script to include your testing framework of choice.

## Author

- **Christopher Reyes**

## License

This project is licensed under the ISC License. See the LICENSE file for more details.

## Dependencies

- `dotenv`: For managing environment variables.
- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `mongoose`: MongoDB object modeling tool designed to work in an asynchronous environment.
- `rest`: A module to facilitate creating RESTful services.
- `nodemon`: A utility that monitors for any changes in your source and automatically restarts your server.

Happy coding! 🚀
