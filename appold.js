const express = require('express')

const app = express()

let request_count = 0

let client_error = false
let server_error = false

app.use((req,res,next)=>{

    // console.log("base URL :" ,req.baseUrl);
    // console.log("request body :" ,req.body);
    // console.log("request params :" ,req.params);

    // request_count ++

    // console.log("welcome to express JS server : ",request_count);
    
    next()

    // if(!client_error && !server_error){
    //     res.status(200).json({msg:"success" ,data:{}})
    // }
    // else if (client_error){
        
    //     res.status(400).json({msg:"client error" })
    // }
    // else if (server_error){
        
    //     res.status(500).json({msg:"server error" })
    // }


}) 

app.use('/api/v1/author',(req,res)=>{
    console.log("request is entered in AUTHOR MW ");
    console.log("------------------------------");
    res.send("welcome to author API ...")
})
app.use('/api/v1/user',(req,res)=>{
    
    console.log("request is entered in USER MW ");
    console.log("------------------------------");
    res.send("welcome to user API ...")
})

app.use('/api/v1/blog',(req,res)=>{
    
    console.log("request is entered in BLOG MW ");
    console.log("------------------------------");
    res.send("welcome to blog API ...")
})




module.exports = app