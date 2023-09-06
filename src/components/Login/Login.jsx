import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

const admin={
  name:"Emin",
  password:"123"

}

const [user,setUser]=useState({
  name:"",
  password:""
})

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    }

const userFromLocal=JSON.parse(localStorage.getItem("User"));

const location =useNavigate();


    const submitForm=(e)=>{
      e.preventDefault();
     if(admin.name === user.name && admin.password === user.password){
      location("/dashboard");
      localStorage.setItem("Admin",JSON.stringify(admin))
      window.location.reload()
    }
    else if (user.name === userFromLocal.name && user.password === userFromLocal.password){
      location("/")
      localStorage.setItem("NewUser",JSON.stringify(user))
      window.location.reload()
    }
  else {
alert("sehv")
  }
   }

  return (
    <div style={{height:"70vh"}} className="container mt-5">
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" name="name" onChange={handleChange} />
        </div>
       
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
          />
        </div>
       
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <Link type="submit" className="btn btn-primary" to="/register">
          If you do not have an account
        </Link>
      </form>
    </div>
  );
};

export default Login;
