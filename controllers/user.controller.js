const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const USER = require("../models/user.model");
const transporter = require("../config/mail.config");
require('dotenv').config()
const fs = require('fs');
const path = require("path");
const root_dir = require("../utils/path");



let successPagePath = path.join(root_dir, 'pages', 'register.html')

const successPage = fs.readFileSync(successPagePath,'utf-8')



const createToken = (email) => {
  return jwt.sign({ email }, process.env.SECRET_KEY , {
    expiresIn: "30min",
  });
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({
          status: "error",
          msg: "please provide complete data to signin",
        });
    }

    // DB
    const is_user =  await USER.findOne({where:{email}})
    if(!is_user){
        return res.status(400).json({status:"error",msg:"email does not exist ..."})
    }
    
    const is_password_matched = await bcrypt.compare(password,is_user.password)
    
    if(!is_password_matched){
        
        return res.status(400).json({status:"error",msg:"wrong password"})
    }


    // DB


    const token = createToken(email);

    res
      .status(200)
      .json({ msg: "successfully loggedin", data: { email, token } });
  } catch (error) {
    res.status(500).json({ status: "Error", msg: error.message });
  }
};

const signUp = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // validate

    if (!email || !password || !username) {
      return res
        .status(400)
        .json({
          status: "error",
          msg: "please provide complete data to signup",
        });
    } else if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ status: "error", msg: "please provide a valid email address" });
    } else if (!validator.isStrongPassword(password)) {
      return res
        .status(400)
        .json({
          status: "error",
          msg: "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one special character.",
        });
    }


    const is_user = await USER.findOne({ where: { email } });
    console.log("is_user : ", is_user);
    if (is_user) {
      return res
        .status(400)
        .json({ status: "error", msg: "email already exist" });
    }

    //ENCRYPT PASSWORD
    const salt = await bcrypt.genSalt(10);
    const encrypted_password = await bcrypt.hash(password, salt);

    //DB
    const user = await USER.create({
      email,
      password: encrypted_password,
      username,
    });
    //

    const info = await transporter.sendMail({
         from: 'fwebdev2021@gmail.com',
         to: user.email,
         subject: "User Registration Notification",
        //  text: "Registered Successfully", 
        html: successPage
      })

      console.log("info ", info.messageId);

    //

    res.status(200).json({ msg: "successfully registered" });
  } catch (error) {
    res.status(500).json({ status: "Error", msg: error.message });
  }
};

module.exports = { signIn, signUp };

/*

    fetch('http://localhost:8000/api/v1/user/signup' ,{
        method:"POST",
        headers:{'content-type':"application/json"},
        body :{username:"user1",email:"user1@ui.com",password:"123456789"}
    })


*/
