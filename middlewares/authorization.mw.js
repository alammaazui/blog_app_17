
const authorization = function (allowedRole){

    return function (req,res,next){
        console.log("inside authorization" ,req.role );
        if(req.role == allowedRole){
            next()
        }
        else{

            res.status(400).json({msg:"unauthorized"})

        }

    }

}
// const authorization = function (allowedRoles){

//     return function (req,res,next){
        
        
//         allowedRoles.forEach(role => {
//             if(req.role == role){
//                 next()
//             }
            
//         });
        


//         return res.status(400).json({msg:"unauthorized"})

        

//     }

// }


module.exports = authorization

