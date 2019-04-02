// Importing .env file which contains port location
require('dotenv').config()

// Importing express and setting it to app variable
const express = require('express')
const app = express()

// Importing routes and assiging them to variables
const indexPath = require('./routes/index')
const charactersPath = require('./routes/characters')
const devilFruitPath = require('./routes/devil-fruits')

// Consuming route variables
app.use(indexPath)
app.use(charactersPath)
app.use(devilFruitPath)

// Setting public folder for static content (Images, CSS, and JS)
// Note: This is the compiled CSS. I bypassed express and use npm scripts
// To use SCSS.
app.use('/static', express.static('public'))

// Setting listening port from the env file
app.listen(process.env.PORT)