const todoController = require('../controllers/todoController.js')
const express = require('express')
const router = express.Router()

router.get('/', todoController.index) // Forth, Completed 
router.post('/', todoController.create) // Started First, Completed 
router.put('/:id', todoController.update) // Third, Completed 
router.delete('/:id', todoController.destroy) // fifth, Completed 
router.get('/:id', todoController.show) // Second, Completed 

module.exports = router