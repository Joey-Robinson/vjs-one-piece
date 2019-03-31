require('dotenv').config()
const express = require('express')
const app = express()

const indexPath = require('./routes/index')
const aboutPath = require('./routes/about')
const contactPath = require('./routes/contact')

app.use(indexPath)
app.use(aboutPath)
app.use(contactPath)

app.use('/static', express.static('public'))

app.listen(process.env.PORT)