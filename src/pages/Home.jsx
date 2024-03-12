
import {React,useEffect,useState} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import HomeComponent from '../components/HomeComponent'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import Loader from "../components/common/Loader"
const Home = () => {
    let navigate=useNavigate();
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        onAuthStateChanged(auth,(res)=>{
            if(!res?.accessToken){
                navigate("/");
            }else{
                setLoading(false);
            }
        })
    },[]);
  return   loading ?<Loader/>:<HomeComponent/>;
    
  
}

export default Home
