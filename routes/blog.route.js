const express = require('express')
const {getBlogs,getBlog,postBlog,updateBlog,deleteBlog} = require('../controllers/blog.controller')
const authenticationMW = require('../middlewares/authentication.mw')
const authorization = require('../middlewares/authorization.mw')
const blogRoute =express.Router()

blogRoute.get('/',getBlogs) //http://localhost:8000/api/v1/blog/ (GET)
blogRoute.get('/:id',getBlog) //http://localhost:8000/api/v1/blog/3 (GET)
blogRoute.post('/',postBlog) //http://localhost:8000/api/v1/blog/ (POST)
blogRoute.patch('/:id',updateBlog)  //http://localhost:8000/api/v1/blog/1 (PATCH)
// blogRoute.delete('/:id',authorization(["admin","superadmin"]),deleteBlog) //http://localhost:8000/api/v1/blog/2  (DELETE)
blogRoute.delete('/:id',authorization("admin"),deleteBlog) //http://localhost:8000/api/v1/blog/2  (DELETE)

module.exports = blogRoute