# Simple Express Server

This project is a simple Express server that listens on port 8001. It is designed to be lightweight and serves as a starting point for building more complex applications.

## Project Structure

```
simple-express-server
├── src
│   └── server.js         # Entry point of the application
├── package.json          # NPM configuration file
├── Dockerfile            # Dockerfile for building the application image
├── .dockerignore         # Files to ignore when building the Docker image
├── .gitignore            # Files to ignore in Git
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Docker installed on your machine.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/microsoft/vscode-remote-try-node.git
   cd simple-express-server
   ```

2. Install dependencies:

   ```
   npm install
   ```

### Running the Server

To start the server with automatic reloading, use:

```
yarn start
```

The server will listen on port 8001.

### Building the Docker Image

To build the Docker image, run:

```
docker build -t simple-express-server .
```

### Running the Docker Container

To run the Docker container, use:

```
docker run -p 8001:8001 simple-express-server
```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.