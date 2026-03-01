import React, { useState } from "react";

const Register = () => {
  const [userData, setuserData] = useState({});

  let base_url = "http://localhost:8000";
  let end_point = "/api/v1/user/signup";

  // let apiURL = "http://localhost:8000/api/v1/user/signup"

  const register = async (e) => {
    e.preventDefault();

    let data = new FormData();

    data.append("email", userData.email);
    data.append("username", userData.username);
    data.append("password", userData.password);
    data.append("profile_pic", userData.profile_pic);

    console.log("file : ", userData.file);

    try {
      const response = await fetch(`${base_url}${end_point}`, {
        method: "POST",
        // headers: { "content-type": "application/json" },
        // headers: { "content-type": "multipart/form-data" },
        // body: JSON.stringify(userData),
        body: data,
      });
      if (response.ok) {
        // redirect to login component
      } else {
        throw new Error(`error : ${response.status}`);
      }
    } catch (error) {
      console.log("error : ", error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          register(e);
        }}
      >
        <input
          type="text"
          placeholder="enter username"
          onChange={(e) => {
            setuserData({ ...userData, username: e.target.value });
          }}
        />
        <hr />
        <hr />
        <input
          type="email"
          placeholder="enter email"
          onChange={(e) => {
            setuserData({ ...userData, email: e.target.value });
          }}
        />
        <hr />
        <hr />
        <input
          type="password"
          placeholder="enter password"
          onChange={(e) => {
            setuserData({ ...userData, password: e.target.value });
          }}
        />
        <hr />
        <hr />
        <input
          type="file"
          name=""
          id=""
          onChange={(e) => {
            setuserData({ ...userData, profile_pic: e.target.files[0] });
          }}
        />
        <hr />
        <hr />
        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default Register
