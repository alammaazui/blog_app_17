require("dotenv").config();
const app = require("./app");

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
  // port = 8000
  // console.log(process.env);
  //console.log("creating dummy data for db ...");
}

app.listen(port, (error) => {
  if (error) {
    console.log(`error while starting server ... ${error}`);
  } else {
    console.log(`server started successfully at port ${port}`);
  }
});
