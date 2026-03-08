const express = require('express')

const app = express()

const mw1 = function(req,res,next){
//    console.log("request obj : ", req); 
//    console.log("response obj : ", res); 
    console.log("inside first mw1");
    next()
    
} 
const mw2 = function(req,res,next){
    //    console.log("request obj : ", req); 
    //    console.log("response obj : ", res); 
    console.log("inside first mw2");
    next()

} 
const mw3 = function(req,res){
//    console.log("request obj : ", req); 
//    console.log("response obj : ", res); 
    console.log("inside first mw3");

    // res.status(402).json()

    res.status(500).send('<h1>Welcome</h1>')

} 

app.use(mw1,mw2,mw3,express.static('/'),express.json())


app.listen(8000,(err)=>{
    if(err){
        
        console.log("err" ,err);
    }
    else{
        console.log("success");
    }

})