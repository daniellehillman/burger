const router = require('express').Router()
const burger = require('../models/burger.js')

router.get('/', (req, res) => {
  burger.getAll(burger => {
    res.render('index', { burger })
  })
})

module.exports = router