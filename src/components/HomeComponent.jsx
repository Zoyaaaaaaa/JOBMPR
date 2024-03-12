import React from 'react'
import Topbar from './common/Topbar'
import './HomeComp.scss'
import PostStatus from './postupdate'
import Lander from '../pages/Lander'
import Resume from '../pages/Resume/ResumePage'

function HomeComponent() {
  return (
    <div>
  
  
  

  
 
       <Lander/>
      
   
 <Resume/>

  {/**<Topbar/> */} 
       <div className='home-component' style={{marginTop:""}}>
           <PostStatus />

  </div>
    </div>
  )
}

export default HomeComponent
