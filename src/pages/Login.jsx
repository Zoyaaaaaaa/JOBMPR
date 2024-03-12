
import {React,useEffect} from 'react'
import LoginComponent from '../components/LoginComponent'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Loader from "../components/common/Loader"
function Login() {
  let navigate=useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,(res)=>{
        if(res?.accessToken){
            navigate("/home");
        }else{
          return <Loader/>
        }
    })
},[]);
  return (
    <div>
      <LoginComponent/>
    </div>
  )
}

export default Login
