const express = require('express')
const {getBlogs,getBlog,postBlog,updateBlog,deleteBlog} = require('../controllers/blog.controller')
const blogRoute =express.Router()

blogRoute.get('/',getBlogs)
blogRoute.get('/:id',getBlog)
blogRoute.post('/',postBlog)
blogRoute.patch('/:id',updateBlog)
blogRoute.delete('/:id',deleteBlog)

module.exports = blogRoute