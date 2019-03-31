const express = require('express')
const router = express.Router()

router.get('/about', (req, res) => {
  res.sendFile('./about.html', { root: './views/' })
})

module.exports = router