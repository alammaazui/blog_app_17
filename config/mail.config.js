const nodemailer = require("nodemailer");
require('dotenv').config()

console.log("mail config");
const host = process.env.SMPT_HOST
console.log(host);
const port = process.env.SMPT_PORT

const user = process.env.SMPT_USER
const pass = process.env.SMPT_PASS


const transporter = nodemailer.createTransport({
  host,
  port,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user,
    pass,
  },
});

(async()=>{
    try {
        await transporter.verify();
        console.log("Server is ready to take our messages");
        
    } catch (error) {
        console.log("smtp config error : " , error.message);        
    }

})();

module.exports = transporter

