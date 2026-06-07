# MyLocker

MyLocker is a full-stack MERN application that allows users to register, log in, and manage their personal records through a simple and responsive dashboard.

The project was built to gain practical experience with React, Node.js, Express.js, MongoDB Atlas, REST APIs, deployment, and GitHub workflows.

## Features

* User Registration and Login
* MongoDB Atlas Database Integration
* REST API Architecture
* Responsive User Interface
* Cloud Deployment using Vercel and Render
* Document Entry Management

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Vercel
* Render

### Version Control

* Git
* GitHub

## How It Works

1. Users create an account and log in.
2. Credentials are sent to the backend through REST APIs.
3. User information is stored in MongoDB Atlas.
4. After successful authentication, users access the dashboard.
5. Users can manage their stored records through the application interface.

## API Endpoints

### Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`

### Documents

* POST `/api/file/upload`
* GET `/api/file`
* DELETE `/api/file/:id`

## Future Improvements

* Password hashing using bcrypt
* JWT Authentication
* Real file uploads with Multer
* Cloud Storage Integration
* User Profile Management
* Search and Filtering Features

## Author

Ashish Sharma
