import { useState,React } from "react";
import { GoogleSignAPI, RegisterAPI } from "../api/AuthAPI"; 
import "../Sass/LoginComps.scss";
import GoogleButton from 'react-google-button'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RegisterComponent() {
  let navigate=useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const register = async () => {
    try {
      
      let user=await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account created successfully!");
      navigate("/home");
      console.log(user);
    
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Error in Signing Up!");
     
    }
  };
  const GoogleSignIn=()=>{
  let res=GoogleSignAPI();
  console.log(res);
  }
  return (
    <div className='login-wrapper'>
      <h1>Sign Up</h1>
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
          placeholder='Create your password'
          type="password"
          value={credentials.password}
          onChange={(event) =>
            setCredentials({ ...credentials, password: event.target.value })
          }
        />
        <button className='loginButton' onClick={register}>
          Register
          
        </button>
      
        <GoogleButton
        onClick= {GoogleSignIn}/>
        <h3>Already have an account?<span onClick={()=>navigate("/")}>Sign in</span> </h3>
      </div>
    </div>
  );
}

export default RegisterComponent
