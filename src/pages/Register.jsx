
import {React,useEffect} from 'react'
import { RegisterAPI } from '../api/AuthAPI'
import RegisterComponent from '../components/RegisterComponent'
import { onAuthStateChanged } from 'firebase/auth'

const Register = () => {
 
  return (
    <div>
      <RegisterComponent/>
    </div>
  )
}

export default Register
