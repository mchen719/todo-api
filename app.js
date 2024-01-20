//create the express app object and add middleware 
const express = require('express')
const app = express()
const todoRouter = require('./routes/todoRouter')

//middleware
app.use(express.json()) // bodyParser middleware for json APIs 
app.use(express.urlencoded( {extended: true } )) //bodyParser middleware for SS rendered Apps 
app.use('/todos', todoRouter)

module.exports = app 