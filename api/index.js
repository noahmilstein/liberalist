const express = require('express')
const router = express.Router()

// this will eventuall be our API for sending and pulling info from mongodb, twitter, and elsewhere
router.get('/', (req, res) => {
  res.send("It\'s ALIVE!")
})

module.exports = router