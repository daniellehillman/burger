const router = require('express').Router()
const burgers = require('../models/burger.js')

router.get('/burger', (req, res) => {
burgers.getAll(burger => {
  res.json(burger)
})
})
// POST one item
router.post('/burger', (req, res) => {
burgers.createOne(req.body, id => {
  res.json({id})
})
})

// PUT one item
router.put('/burger/:id', (req, res) => {
burgers.updateOne(req.body, {id: req.params.id}, ()=> {
  res.sendStatus(200)
})
})

//   // DELETE one item
router.delete('/burger/:id', (req, res) => {
burgers.deleteOne({ id: req.params.id}, () => {
  res.sendStatus(200)
})
})

  module.exports = router