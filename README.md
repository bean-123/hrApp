# hrApp – Employee Management Application

A simple HR management React application to view, add, edit, and delete employee records.  
This project demonstrates React, React Router, Axios, and a JSON backend deployed via Render.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Project Structure](#project-structure)
- [Backend](#backend)
- [Frontend](#frontend)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)

## Demo

- **Live Frontend:** [Your Frontend URL]
- **Live Backend:** [[Your Backend URL](https://hrapp-ukn2.onrender.com/)]

## Features

- View all employees in a clean card layout
- Add a new employee
- Edit existing employee details
- Delete employees
- Display calculated years at company and reminder messages
- Animal icons associated with employees
- Responsive design with separate CSS modules for styling

## Backend

The backend uses **JSON Server** to simulate a RESTful API.

- **Server file:** `server.js`
- **Database:** `db.json`

### Running Locally

```bash
# Install dependencies
npm install

# Start the server
npm start server
```

- API Endpoint: http://localhost:5000/employees (locally)

- Supports GET, POST, PUT, PATCH, DELETE

## Deployed Backend

- Hosted on Render (or your deployment service)

- Base URL example: https://hrapp-ukn2.onrender.com

## Frontend

Built using React with functional components and hooks.
State management is done using useState and data fetching with a custom Axios hook useAxios.

## Technologies

- React

- React Router

- Axios / Custom Hook (useAxios)

- CSS Modules

- JSON Server

- Vite (frontend build tool)

- Render (frontend & backend deployment)
