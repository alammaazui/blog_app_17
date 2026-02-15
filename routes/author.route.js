const express = require('express')

const authorRoute = express.Router()
const AUTHOR = require('../models/author.model')
const {getAuthors,getAuthor,postAuthor,deleteAuthor,updateAuthor} = require('../controllers/author.controller')

authorRoute.get('/',getAuthors)
authorRoute.get('/:id',getAuthor)
authorRoute.post('/',postAuthor)
authorRoute.patch('/:id',updateAuthor)
authorRoute.delete('/:id',deleteAuthor)

module.exports = authorRoute