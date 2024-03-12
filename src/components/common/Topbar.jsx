import React from 'react'
import './TopbarComp.scss'
import logo2 from '../../assets/logo2.png'
import { FaHome } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import user from '../../assets/user.png';
export default function Topbar() {
  return (
    <div className='topbar-main'>
     
      <img className='logo' src={logo2} alt='logo' ></img>
      <div className='react-icons'>
      <FaSearch  size={25} color='white' className='react-icon'/>  
      <FaHome  size={30} color='white'className='react-icon'/>
      <FaRegUserCircle size={30} color='white' className='react-icon'/>
      <FaBriefcase size={30} color='white' className='react-icon'/>
      <RiMessage2Line size={30} color='white' className='react-icon'/>
      <IoNotifications size={30} color='white' className='react-icon'/>
      <img className='user' src={user} alt='logo' ></img>
      </div>
    </div>
  )
}
