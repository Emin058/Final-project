import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


const [user,setUser]=useState({
  name:"",
  email:"",
  password:""
})



const handleChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value})
}
  

const location = useNavigate();

const submitForm=(e)=>{
  e.preventDefault()
  localStorage.setItem("User",JSON.stringify(user))
  location("/login")
}

  return (
    <div style={{height:"70vh"}} className="container mt-5">
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input required type="text" className="form-control" name="name" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
          required
            type="email"
            className="form-control"
          name="email"
          onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
          required
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
          />
        </div>
       
        <button type="submit" className="btn btn-primary" >
          Register
        </button>
        <Link  to="/login" style={{marginLeft:"15px"}} type="submit" className="btn btn-primary" >
          Login
        </Link>
      </form>
    </div>
  );
};

export default Register;
