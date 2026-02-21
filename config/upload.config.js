const multer  = require('multer')
const root_dir = require('../utils/path')
const path = require('path')



const destination_path = path.join(root_dir,'files')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, destination_path)
  },
  filename: function (req, file, cb) {

    console.log("file parameter : " , file);

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

module.exports = upload