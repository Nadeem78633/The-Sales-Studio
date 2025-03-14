# The Sales Studio

The Sales Studio is a full-stack application designed to manage sales data efficiently. It includes a backend server built with Node.js and Express, and a frontend client built with a modern JavaScript framework React js. The application uses MongoDB as its database, managed via Mongoose.

## Features

- **Backend Server**: Handles API requests, interacts with the database, and manages server-side logic.
- **Frontend Client**: Provides a user interface for interacting with the sales data.
- **Database**: MongoDB is used to store and manage sales data.
- **Environment Variables**: Uses `dotenv` to manage environment variables.
- **CORS**: Enables Cross-Origin Resource Sharing for secure communication between the frontend and backend.

## Installation

To get started with The Sales Studio, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/the-sales-studio.git
   cd the-sales-studio
   ```

2. **Install dependencies for backend **:
   ```bash
   npm install
   ```
2. **Install dependencies for frontend **:
   ```bash
   cd frontend
   npm install
   ```

4. **Set up environment variables**:
   Create a `.env` file in the root directory and add the necessary environment variables. For example:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/the-sales-studio
   ```

5. **Seed the database** (optional):
   If you want to populate the database with initial data, run:
   ```bash
   npm run data:import
   ```

## Usage

### Running the Application

- **Start the backend server**:
  ```bash
  npm run server
  ```

- **Start the frontend client**:
  ```bash
  npm run client
  ```

- **Run both the backend and frontend concurrently**:
  ```bash
  npm run dev
  ```

### Building the Application

To build the frontend and install all dependencies, run:
```bash
npm run build
```


## Scripts

- **`start`**: Starts the backend server.
- **`server`**: Starts the backend server with nodemon for hot-reloading.
- **`client`**: Starts the frontend client.
- **`dev`**: Runs both the backend and frontend with concurrently.
- **`data:import`**: Imports data into the database.
- **`build`**: Installs dependencies and builds the frontend.


## Dependencies

### Backend Dependencies

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **cors**: Middleware for enabling CORS.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.

### Dev Dependencies

- **nodemon**: Utility that automatically restarts the node application when file changes are detected.

