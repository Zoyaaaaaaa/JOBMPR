import React, { useState } from "react";
import { GoogleSignAPI, loginAPI,RegisterAPI } from "../api/AuthAPI"; // Adjusted import statement
import "../Sass/LoginComps.scss";
import GoogleButton from 'react-google-button'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  let navigate=useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const login = async () => {
    try {
      
      let user=await loginAPI(credentials.email, credentials.password);
      toast.success("Successfully Signed In!");
      navigate("/home");
      console.log(user);
    
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Error in Signing in!");
     
    }
  };
  const GoogleSignIn=()=>{
  let res=GoogleSignAPI();
  navigate("/home");
  console.log(res);
  }
  return (
    <div className='login-wrapper'>
      <h1>Sign In</h1>
      <div className="auth-input">
        <input
          className='common-input'
          placeholder='Enter your email'
          value={credentials.email}
          onChange={(event) =>
            setCredentials({ ...credentials, email: event.target.value })
          }
        />
        <input
          className='common-input'
          placeholder='Enter your password'
          type="password"
          value={credentials.password}
          onChange={(event) =>
            setCredentials({ ...credentials, password: event.target.value })
          }
        />
        <button className='loginButton' onClick={login}>
          Login to Portal
        </button>
      
        <GoogleButton
        onClick= {GoogleSignIn}/>
        <h3>New to CarrerCrafter?<span onClick={()=>navigate("/register")}>Join now</span> </h3>
      </div>
    </div>
  );
}

export default LoginComponent;
