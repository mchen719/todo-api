const todoController = require('../controllers/todoController.js')
const express = require('express')
const router = express.Router()

router.get('/', todoController.index)
router.post('/', todoController.create)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.destroy)
router.get('/:id', todoController.show)

module.exports = router