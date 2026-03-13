# Task Management API

A RESTful API for task management with user authentication built with Node.js, Express, and MongoDB.

## ⚡ Quick Setup (30 Seconds)

```bash
# 1. Clone and install
git clone <repository-url>
cd task-management-api
npm install

# 2. Create .env file
echo "PORT=5000
MONGODB_URI=
JWT_SECRET=
JWT_EXPIRE=7d" > .env

# 3. Start server
npm run dev


## Features

- User authentication (Register/Login) with JWT
- Create, read, update, and delete tasks
- Task status management (Pending, In Progress, Completed)
- Search tasks by title
- Pagination support
- Input validation
- Error handling
- Password hashing with bcrypt

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- bcryptjs for password hashing
- express-validator for input validation

## Prerequisites

- Node.js (v24)
- npm (v11.6)
- MongoDB Atlas account 

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd task-management-api