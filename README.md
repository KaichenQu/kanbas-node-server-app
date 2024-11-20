# Kanbas Node Server Application

A Node.js HTTP Web server for the Kanbas application, providing RESTful API endpoints for course management functionality.

## Description

This server application provides backend services for the Kanbas learning management system, handling course data, user management, modules, and assignments. It's built using Express.js and includes features like session management and CORS support.

## Technologies Used

- Node.js
- Express.js
- Express Session
- CORS
- Dotenv

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KaichenQu/kanbas-node-server-app.git
   cd kanbas-node-server-app
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```plaintext
   PORT=4000
   NODE_ENV=development
   SESSION_SECRET=your_session_secret
   NETLIFY_URL=your_frontend_url
   NODE_SERVER_DOMAIN=your_server_domain
   ```

## Available Scripts

- `npm start`: Runs the server
- `npm test`: Runs the test suite

## API Endpoints

### Courses

- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create a new course
- `DELETE /api/courses/:courseId` - Delete a course
- `PUT /api/courses/:courseId` - Update a course
- `GET /api/courses/:courseId/modules` - Get modules for a course
- `POST /api/courses/:courseId/modules` - Create a module for a course

### Users

- `POST /api/users/signup` - User registration
- `POST /api/users/signin` - User login
- `POST /api/users/signout` - User logout
- `POST /api/users/profile` - Get user profile
- `GET /api/users/:userId/courses` - Get courses for a user
- `POST /api/users/current/courses` - Create a course for current user

### Modules

- `DELETE /api/modules/:moduleId` - Delete a module
- `PUT /api/modules/:moduleId` - Update a module

## Database Structure

The application uses an in-memory database with the following collections:

- Courses
- Users
- Modules
- Assignments
- Grades
- Enrollments

## Security

The application implements:

- Session-based authentication
- CORS protection
- Environment variable configuration
- Secure cookie settings for production

## Development vs Production

The application has different configurations for development and production environments.

## License

ISC

## Author

Kelson Qu

## Repository

[GitHub Repository](https://github.com/KaichenQu/kanbas-node-server-app)
