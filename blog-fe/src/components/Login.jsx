import React, { useState } from "react";

const Login = () => {

  let base_url = "http://localhost:8000";
  let end_point = "/api/v1/user/signin";
  const [user_data,setUserdata] = useState({})

  const login = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${base_url}${end_point}`,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(user_data)
      });

      if(response.ok){

        console.log("response : ", response);

        const {data} = await response.json()

        const auth_token = data.token
        
        localStorage.setItem('token', auth_token)
        localStorage.setItem('image', data.profile_pic)
        localStorage.setItem('role', data.role)

        

      }
      else{
        throw new Error(`error : ${response.status}`)
      }


    } catch (error) {

        console.log(error.message);

    }
  };

  return (
    <>
      <form onSubmit={(e)=>{login(e)}}>
        <input type="email" placeholder="Enter Email" onChange={(e)=>(setUserdata({...user_data,email:e.target.value}))}/>
        <hr />
        <hr />
        <input type="text" placeholder="Enter Password" onChange={(e)=>(setUserdata({...user_data,password:e.target.value}))}/>
        <hr />
        <hr />
        <input type="submit" value={"Login"} />
      </form>
    </>
  );
};

export default Login;
