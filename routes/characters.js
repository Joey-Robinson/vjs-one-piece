const express = require('express')
const router = express.Router()

router.get('/characters', (req, res) => {
  res.sendFile('./characters.html', { root: './views/' })
})

module.exports = router