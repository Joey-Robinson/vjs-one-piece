const express = require('express')
const router = express.Router()

router.get('/contact', (req, res) => {
  res.sendFile('./contact.html', { root: './views/' })
})

module.exports = router