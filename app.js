const express = require('express')
const userRoute = require('./routes/user.route')
const blogRoute = require('./routes/blog.route')

const app = express()

app.use(express.json())
// creating user API
app.use('/api/v1/user',userRoute)

// creating blog API
// app.use(authenticationMW)

app.use('/api/v1/blog', blogRoute)






module.exports = app