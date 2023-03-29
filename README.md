# Project Description
This project consists in a basic routing system built with ExpressJS and TypeScript that supports CRUD operations and persists user data in a JSON file.

## Endpoints

The server supports the following endpoints:

### GET /users
Returns an array of all users.

### GET /users/:id
Returns the user with the specified id.

### POST /users
Creates a new user and returns the created user object.

### PUT /users/:id
Updates the user with the specified id and returns the updated user object.

### DELETE /users/:id
Deletes the user with the specified id and returns a success message.

## Data Structure
The user data structure consists of the following properties:

* id (number)
* email (string)
* name (string)
* phone (string)
* username (string)
* website (string)
* address (object)
    * city (string)
    * street (string)
    * zipcode (string)
* companyName (string)

## Libraries and Dependencies
This project uses the following libraries and dependencies:

### Dependencies
* body-parser: ^1.19.1
* cors: ^2.8.5
* express: ^4.17.1
* fs: 0.0.1-security

### DevDependencies
* @types/body-parser: ^1.19.0
* @types/cors: ^2.8.13
* @types/express: ^4.17.13
* nodemon: ^2.0.13
* typescript: ^4.3.5

## How to Run the Project
To run this project, follow these steps:

* Clone the repository from Github: https://github.com/tiagoneto7/users-management-server
* Open the terminal and navigate to the project directory.
* Install the dependencies: npm install.
* Start the development server: npm start.





