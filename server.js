require("dotenv").config();
const app = require("./app");
const sequelize = require('./config/db.config');
const AUTHOR = require("./models/author.model");
const BLOG = require("./models/blog.model");
const USER = require("./models/user.model");
let port = process.env.PORT || 8000;

/*
---Node JS Globals----
__dirname
__filename
process
require
console
module
*/

if (process.env.NODE_ENV == "development") {
  //port = 8000
  //console.log(process.env);
  //console.log("creating dummy data for db ...");
};

// Db Connection Test

// IIFE Immediately invoked function expression

(async function (){

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await USER.sync()
    console.log('user table created successfully');
    await AUTHOR.sync()
    console.log('author table created successfully');
    await BLOG.sync({force:false})
    console.log("blog table created successfully");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}());
// Db Connection Test


app.listen(port, (error) => {
  if (error) {
    console.log(`error while starting server ... ${error}`);
  } else {
    console.log(`server started successfully at port ${port}`);
  }
});
