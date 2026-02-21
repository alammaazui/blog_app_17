const express = require('express')
const cors = require('cors')
const userRoute = require('./routes/user.route')
const blogRoute = require('./routes/blog.route')
const authenticationMW = require('./middlewares/authentication.mw')
const authorRoute = require('./routes/author.route')
const root_dir = require('./utils/path')
const path = require('path')
const app = express()
// localhost:3000

const staticfilespath = path.join(root_dir,'files') 

app.use(cors('*'))

app.use(express.json())
// creating user API
app.use('/api/v1/user',userRoute)

app.use('/files',authenticationMW, express.static(staticfilespath))

// creating blog API

// app.use(authenticationMW)

app.use('/api/v1/blog', blogRoute)

app.use('/api/v1/author',authorRoute)






module.exports = app