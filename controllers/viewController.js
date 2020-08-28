const router = require('express').Router()
const burgers = require('../models/burger.js')

router.get('/', (req, res) => {
  burgers.getAll(burgers => {
    res.render('index', { burgers })
  })
})

module.exports = router