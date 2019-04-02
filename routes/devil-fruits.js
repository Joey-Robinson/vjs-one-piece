const express = require('express')
const router = express.Router()

router.get('/devil-fruits', (req, res) => {
  res.sendFile('./devil-fruits.html', { root: './views/' })
})

module.exports = router