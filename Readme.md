<html><center><h1>Employee Management Full Stack Application</h1></center></html>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React Router V6](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)


<p align="center">
  <b>A delightful Full Stack Application using React and Node.js Backend Microservice with beautiful code written in TypeScript.</b></br>
  <sub>Made with ❤️ by <a href="https://github.com/kingshuknandy2016/">Kingshuk Nandy</a></sub>
</p>

![Microservices-Built-With-Node-1](./docs/images/appHomePage.png)

# Overview <!-- omit in toc -->

# Table on Contents <!-- omit in toc -->

- [Backend Application](#backend-application)
  - [Tech stack](#tech-stack)
  - [Features](#features)
  - [Architecture](#architecture)
  - [Project Structure](#project-structure)
  - [API Routing](#api-routing)
  - [Logging](#logging)
  - [Seeding](#seeding)
  - [Role Based Access](#role-based-access)
- [Frontend](#frontend)
  - [Features](#features-1)
  - [Project Structure](#project-structure-1)
  - [Environment Specific Configuration](#environment-specific-configuration)
  - [Practices Followed Here](#practices-followed-here)
- [Quick Start](#quick-start)
  - [Database Setup](#database-setup)
  - [Running the Backend](#running-the-backend)
  - [Running the Front End](#running-the-front-end)
  - [Important URL](#important-url)
- [Customization and Expansion](#customization-and-expansion)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)


# Backend Application

## Tech stack

- **Express.js Backend**: Utilizes Express.js, a fast and minimalist web framework for Node.js. Manages HTTP requests, routes, and middleware to handle various aspects of the employee management system.

- **TypeScript**: Uses TypeScript for strong typing, providing enhanced code maintainability and better developer experience Enables the use of modern ECMAScript features.

- **PostgreSQL Database**: Integrates with a PostgreSQL database for storing **employee-related** data.

- **Sequelize ORM**:Sequelize is employed as an **ORM (Object-Relational Mapping)** tool for easier database interactions. <br/>Defines a Employee model using Sequelize to represent the structure of the **employee data** in the database.<br/>
Handles database operations, including CRUD (Create, Read, Update, Delete) functionalities for employee records.
- **Swagger for API Documentation**: Implements Swagger for automatic API documentation generation. Describes the API operations, endpoints, request/response formats, and other relevant details.

## Features

- [x] **Authentication** of the API is integrated using JWT
- [x] Strong **Password Encryption** using bcrypt
- [x] Basic **Unit testing** is implemented using jest

## Architecture 
Organizes the project into folders such as controllers, models, routes, and services to maintain a clean and modular codebase.

![Data Flow](../employee-management-app/docs/images/architecture.jpeg)

 - **Start Microservice :** [index.ts](./backend-express-postgresql/src/index.ts) to start the microservice application
 - **Express App Setup** : Configures the main Express application [app.ts](./backend-express-postgresql/src/app.ts) by adding middleware, such as body-parser for parsing JSON requests.
Mounts the **Index router** under the **/** path.
- **Routing :** Routes are used to exposes RESTful endpoints for employee-related operation. The **v1Apis** are [here](./backend-express-postgresql/src/routes/v1Apis/)
- **Controller :** The **v1 controller**  are [here](./backend-express-postgresql//src/controller/v1/) that handles HTTP requests related to employees.
-  **Service :** Implements a [service layer](./backend-express-postgresql/src/service/) to encapsulate business logic related to employees.
Provides methods for fetching all employees, retrieving an employee by ID, and creating new employee records.
- **Models :** Defines a Sequelize model for different entity, including attributes like name and email. The models are [here](./backend-express-postgresql/src/models/)
The model is used to interact with the PostgreSQL database.

## Project Structure

| Name                              | Description |
| --------------------------------- | ----------- |
| **.vscode/**                      | VSCode tasks, launch configuration and some other settings |
| **dist/**                         | Compiled source files will be placed here |
| **src/**                          | Source files |
| **src/constants/**                | The Global Constants |
| **src/controllers/**              | REST API Controllers |
| **src/controllers/v1**            | REST API Controllers version v1|
| **src/dbServices/v1**             | DB Service Configuration|
| **src/services/**                 | Service layer |
| **src/middlewares/**              | Express Middlewares like Authentication |
| **src/models/**                   | Sequelize Models |
| **src/routes/v1Apis**             | API Routes |
| **test/unit/** *.test.ts          | Unit tests |
| .env.example                      | Environment configurations |

## API Routing
The route prefix is `/api` by default, but you can change this in the .env file.
The swagger and the monitor route can be altered in the `.env` file.

| Route          | Description |
| -------------- | ----------- |
| **/health**    | Get the health of server |
| **/apis/v1**   | The Api server details |
| **/graphql**   | Route to the graphql editor or your query/mutations requests |
| **/api-docs/** | This is the Swagger UI with our API documentation |

```sh
# Public API Routes:
+--------+------------------------------+
  Method | URI
+--------+------------------------------+
  GET    | /health
  POST   | /apis/v1/auth/signUp
  POST   | /apis/v1/auth/login
  GET    | /apis/v1/employees/getEmployeeBasic
  GET    | /apis/v1/employees/getEmployees
  POST   | /apis/v1/employees/setEmployee
+--------+------------------------------+

# Private API Routes:
+--------+------------------------------+
  Method | URI
+--------+------------------------------+
  GET    | /apis/v1/users/getUsersBasic
  GET    | /apis/v1/users/getUsers
  POST   | /apis/v1/users/setUser
+--------+------------------------------+
```
## Logging

Our logger is winston. 

```javascript
export interface Log {
  level: "info" | "debug" | "error" | "warn";
}
const logger = winston.createLogger({
  transports: [new winston.transports.Console({ level: LOG.level })],
});
export default logger;
```
## Seeding

* Execute the following script to create the admin user in the database
  ```cmd
    npm run migrate:admin-create
  ```
 ***Admin Username:*** superadmin <br/>
  ***Password:*** password

## Role Based Access
Yet to be implemented

# Frontend

## Features

- [x] Login and SignUp Pages
- [x] Routing Implemented using **_React Router V6_**
- [x] Centralized Store Management by Using **_Redux_**
- [x] Navbar and Sidebar Implemented
- [x] **_TODO_** App Implemented
- [x] TailwindCSS for responsive styling
## Project Structure

The folders under the src folder are listed as follows
- [assets](./src/assets/) - Contains any kind of assets like images,svg,global css
- [components](./src/components/) - All the share components will be inside this folder
- [context](./src/context/) - Any kind of context
- [data](./src/data/) - Any kind of constants or store json
- [hooks](./src/hooks/) - All the hooks that is there for the application
- [pages](./src/pages/) - All the unique pages will come up here. The actual pages 
- [utils](./src/utils) - All the utility files. Small and simple pure functions
- [store](./src/store/) - The redux store data
- [layouts](./src/layouts/) - This is for layouts like Nav bar, headers, footers etc.
- [lib](./src/lib/) - The external library that we use. Like Axios, Faced Pattern. Faced put over any library
- [services](./src/services/) - Different Services like API or graphql
- [routes](./src/routes/) - The centralized route files
- [features](./src/features/) - Contains certain features and its relevant files

## Environment Specific Configuration
Yet to be implemented

## Practices Followed Here
* Functional Component everywhere. No class component used


# Quick Start

## Database Setup
Get your application DB up. Ensure that you have docker installed. We are using **Postgres Docker container** as the Database

```cmd
docker pull postgres
```

```cmd
docker run --name postgres-db -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres
```

## Running the Backend

All script are defined in the `package.json` file, but the most important ones are listed here.


* **Install** all dependencies with `npm install`
* For **linting** execute the command `npm run eslint:fix`
* Run the **unit test**s using `npm test`
* To run the app in **dev mode** run `npm run dev` to start nodemon with ts-node, to serve the app.
* Building the project and run it . Then start the application `npm run start:dev`

## Running the Front End

Start the Project with the following Command

```cmd
npm start
```
## Important URL
- **Application Health** http://localhost:3000/health
- **Graphql Server** 
  - http://localhost:3000/graphql or 
  - https://studio.apollographql.com/sandbox/explorer?endpoint=http://localhost:3000/graphql
- **Swagger** http://localhost:3000/api-docs/
- **Frontend Application** http://localhost:8080/

In order to access the private the routes, we need to pass the JWT token generated by the login API
# Customization and Expansion
Emphasizes the need for customization based on new requirements, such as validation, error handling, and additional CRUD operations.

# Contributing

Please feel free to contribute to this project by submitting issues or pull requests.

# License

This project is licensed under the MIT License - see the LICENSE file for details.

# Acknowledgments

Thank you for using this template. I hope it helps you build your next project with ease.
