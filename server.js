// Importing .env file which contains port location
require('dotenv').config()

// Importing express and setting it to app variable
const express = require('express')
const app = express()

// Importing routes and assiging them to variables
const indexPath = require('./routes/index')
const aboutPath = require('./routes/about')
const contactPath = require('./routes/contact')

// Consuming route variables
app.use(indexPath)
app.use(aboutPath)
app.use(contactPath)

// Setting public folder for static content (Images, CSS, and JS)
app.use('/static', express.static('public'))

// Setting listening port from the env file
app.listen(process.env.PORT)