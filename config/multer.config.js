const multer  = require('multer')
const root_dir = require('../utils/path')
const path = require('path')

// console.log(root_dir)

const fileDirPath = path.join(root_dir,"files","users")

// console.log(fileDirPath);

// let filename = "profile_pic.mp3"

// const ext =path.extname(filename)

// console.log(ext);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, fileDirPath)
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    // cb(null, file.fieldname + '-' + uniqueSuffix)
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`)
  }
})

const upload = multer({ storage: storage })

module.exports = upload