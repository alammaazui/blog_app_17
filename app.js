const express = require('express')
const cors = require('cors')
const userRoute = require('./routes/user.route')
const blogRoute = require('./routes/blog.route')
const authenticationMW = require('./middlewares/authentication.mw')

const app = express()
// localhost:3000
app.use(cors('*'))

app.use(express.json())
// creating user API
app.use('/api/v1/user',userRoute)

// creating blog API

app.use(authenticationMW)

app.use('/api/v1/blog', blogRoute)
app.use('/api/v1/category', blogRoute)
app.use('/api/v1/Comments', blogRoute)
app.use('/api/v1/author', blogRoute)






module.exports = app