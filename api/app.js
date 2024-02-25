// imports
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')      // logs the request, helps us during debugging and checking the results
const cors = require('cors')          // for communication between the frontend and the backend
require('dotenv').config()            // to store sensitive information, keys , that should not be uploaded on the repository

// app
const app = express()

// db
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Database Connected."))
  .catch((err) => console.error("Error connecting to database:", err));
  


// middleware
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
const userRoutes = require('./src/api/routes/users')
app.use('/users', userRoutes)

// port
const port = process.env.PORT || 8080;

// listners
const server = app.listen(port , () => console.log(`server running on port http://localhost:${port}`))