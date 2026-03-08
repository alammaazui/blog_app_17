const express = require('express')
const cors = require('cors')
const userRoute = require('./routes/user.route')
const blogRoute = require('./routes/blog.route')
const authenticationMW = require('./middlewares/authentication.mw')
const authorRoute = require('./routes/author.route')
const root_dir = require('./utils/path')
const path = require('path')
const authorization = require('./middlewares/authorization.mw')
const upload = require('./config/multer.config')

const app = express()
// localhost:3000

// app.post('/fileupload',upload.single('pic'))


const staticfilespath = path.join(root_dir,'files') 
// const staticfilespath1 = path.join(root_dir,'files') 
// const staticfilespath2 = path.join(root_dir,'images') 
// const staticfilespath3 = path.join(root_dir,'documents') 

// app.use(cors('*'))
app.use(cors({
  origin: [
    'http://localhost:5173',
    // 'https://myapp.com'
  ]
}))

app.use(express.json())
// creating user API
app.use('/api/v1/user',userRoute)

// app.use('/blogimages',express.static(staticfilespath1))
// app.use('/userfiles',express.static(staticfilespath2))
// app.use('/authorqualification',express.static(staticfilespath3))

app.use('/files',authenticationMW, express.static(staticfilespath))
// app.use('/files', express.static(staticfilespath))

// creating blog API

app.use(authenticationMW)

app.use('/api/v1/blog',authenticationMW ,blogRoute)

app.use('/api/v1/author',authorization("author") , authorRoute)

module.exports = app