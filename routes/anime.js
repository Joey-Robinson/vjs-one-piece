const express = require('express')
const router = express.Router()

router.get('/anime', (req, res) => {
  res.sendFile('./anime.html', { root: './views/' })
})

module.exports = router