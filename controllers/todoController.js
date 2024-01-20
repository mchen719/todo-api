const Todo = require('../models/todo.js')

/*
200 - good response 
    200 - ok
    201 - created 
    204 - no content (everything worked but not sending data back)
300 - redirection 
    301 - redirect 
    302 - redirect
400 - bad response but it was the user's fault (Server didn't break)
    400 - bad response 
    401 - unauthorized 
    403 - forbidden 
    404 - not found (try to find something that does not exist)
500 - server's fault (server didn't work)
*/

exports.index = async function index(req, res) {
    try {
        const todos = await Todo.find({})
        res.status(200).json(todos)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.create = async function create(req, res) {
    try {
        const todo = await Todo.create(req.body)
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.update = async function update(req, res) {
    try {
        const updatedTodo = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.status(200).json(updatedTodo)
    } catch (error) {   
        res.status(400).json({message: error.message})
    }
}

exports.destroy = async function destroy(req, res) {
    try {
        const deleted = await Todo.findOneAndDelete({ _id: req.params.id })
        res.status(200).json({ message: `The todo with the id of ${deleted._id} was deleted from the MongoDB database. No Further action necessary`})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.show = async function show(req, res) { 
    try {
        const foundTodo = await Todo.findOne({ _id: req.params.id })
        res.status(200).json(foundTodo)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}