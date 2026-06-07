# MyLocker

MyLocker is a full-stack web application built to help users keep important information in one place. The idea behind the project was to create a simple digital locker where users can create an account, log in securely, and manage their stored records through an easy-to-use interface.

This project was developed as a learning project to gain hands-on experience with the MERN stack, REST APIs, database integration, authentication, deployment, and version control.

## Features

* User Registration
* User Login Authentication
* Secure User Data Storage with MongoDB Atlas
* Responsive and Clean User Interface
* REST API Integration
* Document Entry Management
* Cloud Deployment
* GitHub Version Control

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Fetch API

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)

### Version Control

* Git
* GitHub

## Project Structure

MyLocker follows a client-server architecture.

Frontend handles:

* User Interface
* Routing
* API Requests
* State Management

Backend handles:

* Authentication
* Database Operations
* REST API Endpoints
* Business Logic

MongoDB Atlas stores:

* User Information
* Application Data

## How It Works

1. A user creates an account using the registration page.
2. User credentials are sent to the backend through REST APIs.
3. The backend validates and stores user information in MongoDB Atlas.
4. The user can log in using the registered credentials.
5. After successful authentication, the user is redirected to the dashboard.
6. The dashboard allows users to manage their stored information through a simple interface.

## REST APIs Used

### Authentication Routes

POST /api/auth/register

Creates a new user account.

POST /api/auth/login

Authenticates an existing user.

### File Routes

POST /api/file/upload

Stores document information.

GET /api/file

Retrieves stored documents.

DELETE /api/file/:id

Deletes a specific document.

## Challenges Faced

During development, several real-world issues were encountered and resolved:

* CORS configuration issues between frontend and backend
* MongoDB Atlas connection errors
* Deployment configuration on Render and Vercel
* API integration and debugging
* State management and component communication
* Git and GitHub version control workflow

Resolving these issues helped in understanding how real-world full-stack applications work beyond local development environments.

## Learning Outcomes

This project helped me gain practical experience with:

* Building full-stack web applications
* Creating and consuming REST APIs
* Working with MongoDB Atlas
* Backend development using Express.js
* Frontend development using React.js
* Deployment using Render and Vercel
* Git and GitHub workflows
* Debugging production issues

## Future Improvements

Some features planned for future versions include:

* Password encryption using bcrypt
* JWT-based authentication
* Real file uploads using Multer
* Cloud storage integration (Cloudinary or AWS S3)
* User profile management
* Improved document categorization and search functionality

## Author

Ashish Sharma

This project was built as part of my journey to strengthen my full-stack web development skills and gain practical experience with modern web technologies.
