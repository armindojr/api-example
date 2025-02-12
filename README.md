# API Example for load test

## Project Overview

This project is an API example built using Node.js with Express.js as the web framework. It integrates MongoDB as the database and utilizes Docker for containerization, ensuring a consistent development environment across different systems. The project structure is organized to facilitate easy management and scalability.

## Motivation

The primary motivation behind this project is to develop skills in load test automation using multiple tools to train and achieve knowledge. This project will be used to not overload real sites or real API with load testing, it will only overload your local machine.

## Credentials

To use this project effectively, you will need the following credentials:

- **Environment Variables**: As specified in `.env.example`, ensure these variables are set up correctly for your environment.

This information is crucial for setting up and running the application smoothly.

## Getting Started

### Prerequisites

- Node.js (version >= 20.x)
- npm (version >= 11.x)
- Docker (version >= 27.5.1)
- Docker compose (version >= 2.32.4)

### Installation Steps

1. Clone the repository:

   ```sh
   git clone git@github.com:armindojr/api-example.git
   cd api-example
   ```

2. Set up environment variables:

   - Make a copy of `.env.example` and rename it to `.env`.
   - Add your passwords on `MONGO_ROOT_PASSWORD` and `MONGOEXPRESS_PASSWORD` variables

3. Run all containers:

   ```sh
   docker compose up -d
   ```

4. Your API will be running on [localhost:3001](http://localhost:3001)

## Project Structure

```
.
└── api-example/
    ├── collection/                          # Contains API collection files
    │   ├── bruno/                           # Collection for Bruno
    │   └── postman/                         # Collection for Postman
    ├── mongo-init/                          # Scripts or files for initializing MongoDB during startup.
    ├── src/                                 # Stores API code
    │   ├── controllers/                     # Object handlers.
    │   ├── middleware/                      # Middleware functions for common tasks.
    │   ├── models/                          # Data models and schemas using Mongoose.
    │   ├── routes/                          # API endpoints mapped to controllers.
    │   └── index.js                         # Entry point where the server is initialized.
    ├── .env.example                         # Example environment variables configuration
    ├── .gitignore                           # Ignore specific files and folders on git
    ├── .prettierrc                          # Configuration file for Prettier
    ├── eslint.config.mjs                    # Configuration file for ESlint
    ├── docker-compose.yml                   # Defines services, networks, and volumes using Docker Compose.
    ├── package-lock.json                    # File that specifies packages version
    ├── package.json                         # File that contains packages and scripts
    └── README.md                            # This file. Project documentation
```

## Contributing

Contributions are welcome! If you'd like to help improve this code, please fork the repository and create a pull request.

### Steps to Contribute:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit changes (`git add . && git commit -m 'your commit message'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request against the `main` branch.

## Code Style

This project enforces the following standards:

- JavaScript (ES6+).
- Code formatting adheres to ESLint rules.
