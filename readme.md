# MyLocker

MyLocker is a full-stack web application that allows users to register, log in, and manage their records through a simple and responsive dashboard.

The project was built to gain practical experience with React, Node.js, Express.js, MongoDB Atlas, REST APIs, deployment, and GitHub workflows.

## Features

* User Registration
* User Login Authentication
* MongoDB Atlas Database Integration
* REST API Architecture
* Responsive User Interface
* Document Record Management
* Frontend Deployment on Vercel
* Backend Deployment on Render

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

### Version Control

* Git
* GitHub

## How It Works

1. Users create an account through the registration page.
2. Credentials are sent to the backend using REST APIs.
3. User information is stored in MongoDB Atlas.
4. Users can log in using their registered credentials.
5. After authentication, users are redirected to the dashboard.
6. Users can manage their stored records through the application interface.

## API Endpoints

### Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`

### Documents

* POST `/api/file/upload`
* GET `/api/file`
* DELETE `/api/file/:id`

## Future Improvements

* Password encryption
* Protected user sessions
* Dummy file uploads
* Search and filtering
* Improved dashboard experience

## Author

Ashish Sharma
