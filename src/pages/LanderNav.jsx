import React from "react";
import logo2 from '../assets/logo2.png'
import './LanderPage.scss';

export default function LanderNav() {
    return (
  
          <div className='topbar-main'>
             
              <img className='logo' src={logo2} alt='logo' ></img>
  
            <div className='react-icons'>
                <button className="button">Login</button>
                <button className="button">Sign Up</button>
            </div> 
         </div>
    );}
  