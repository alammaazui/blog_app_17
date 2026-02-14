const jwt = require('jsonwebtoken')
require('dotenv').config()


const authenticationMW = (req,res,next)=>{

    try {

        console.log("passing through authentication MW ...");

        console.log("request headers : ",req.headers); 

        const auth_token = req.headers.Authorization || req.headers.authorization
        
        console.log("auth_token : " , auth_token);
        if(!auth_token){
            return res.status(401).json({msg:"please provide authentication token to proceed !"})
        }
     

        const token_value = auth_token.split(' ')[1]
        
        console.log("token_value : " , token_value);
        console.log("secret key :" ,process.env.SECRET_KEY)


        jwt.verify(token_value , process.env.SECRET_KEY ,(err, decode)=>{

            if(err){
                console.log("error : ", err);

                return res.status(400).json({msg:`invalid token : ${err.message} ` })
            }
            else{
                console.log("decoded object : " , decode );

                req.email = decode.email
                
                next()
            }
            
            // console.log("decode  : ",decode);


        })


        
    } catch (error) {
        
        console.log(error);
        res.status(500).json({msg:error.message})

    }


}


module.exports = authenticationMW

/* fetch (apiendpoint , {

    method :"POST",
    headers :{
        "content-type" :"application/JSON",
        authorization : `bearer ${localStorage.getItem('authToken')}`

    }

})

*/