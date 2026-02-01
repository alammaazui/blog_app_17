const express = require('express')
const userRoute = require('./routes/user.route')

const app = express()

app.use(express.json())
// creating user API
app.use('/api/v1/user',userRoute)





module.exports = app