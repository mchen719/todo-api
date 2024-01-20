const mongoose = require('mongoose')

const todSchema = new mongoose.Schema({
    title: {type: String, required: true}, 
    description: { type: String, required: true},
    completed: { type: Boolean, requied: true}
}, {
    timestamps: true
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo