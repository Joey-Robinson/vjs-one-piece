const express = require('express')
const router = express.Router()

router.get('/manga', (req, res) => {
  res.sendFile('./manga.html', { root: './views/' })
})

module.exports = router