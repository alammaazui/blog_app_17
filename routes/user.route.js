

const express = require('express')
const {signIn ,signUp} = require('../controllers/user.controller');
const upload = require('../config/upload.config');

const route = express.Router();

route.post('/signin',signIn)
// route.post('/signup',signUp) // without file uploading 
route.post('/signup',upload.single('profile_pic'),signUp) // with file uploading

module.exports = route
