require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/test.html'))
})

app.listen(process.env.PORT)