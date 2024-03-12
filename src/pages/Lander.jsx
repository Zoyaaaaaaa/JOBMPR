import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import work from '../assets/work.gif';
import './LanderPage.scss';
import Card from './Card/Card';

import LanderNav from './LanderNav';
import animate from '../assets/animate.gif';

import resume from '../assets/resume.png';

import network from '../assets/network.png';

import chatbot from '../assets/chatbot.png';

import chat from '../assets/chat.png';

import post from '../assets/post.png';

import matching from '../assets/matching.png';


export default function Lander() {
  return (
    <div className='lander'>
      <LanderNav/>
      <div className='image-container'>
        <img src={work} alt='landerimg' className='landerimg' />
        <div className='slogan'>
          {/* Use motion component to add animation to "Easy Link" */}
          <motion.h1 initial={{ y: -80 }} animate={{ y: -20 }} transition={{ type: 'spring', stiffness: 120 }} duration={{ delay: 0.7 }}>
            Easy Link
          </motion.h1>
          <div className='slogan-subtext'  >
          <motion.div
           initial={{ x: -100 }}
           animate={{ x: 10}}
           transition={{ ease: "easeOut", duration: 2 }}
         >
            <h2>Your Network, Your Future</h2>
            <h3>Connect  Empower Succeed</h3>
            </motion.div>
          </div>
        </div>
      </div>
      
     <div className='about-us'>
      <img src={animate} alt='landerimg' className='about-image' />
      
        <div className="about-content">
          <h4>About Us</h4>
          <a>
            Lorem ipsum dolor sit amet, consectetur rat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus in orci sit amet leo eleifend elementum. Proin vitae diam vitae magna lobortis consectetur. Quisque auctor nunc a mauris hendrerit, nec dictum nisi accumsan. Sed pulvinar, est in hendrerit pharetra, tortor magna lacinia est, nec consectetur purus metus sit amet arcu.
          </a>
         
        </div>
        
      </div>

      <div className='features'>

      <div className='features'>
  <h4>Features</h4>
  <div className="card-container">
    <Card
      title="Resume builder"
      image={resume}
      newTitle="Resume builder"
      newDescription="Description of new content 1"
    />
    <Card
      title="Connecting"
      image={network}
      newTitle="Connecting"
      newDescription="  Implement a networking or connection feature.          
      Users can connect with other professionals, recruiters, or colleagues within the platform.
   "
    />
    <Card
      title="Posting"
      image={post}
      newTitle="Posting"
      newDescription="Description of new content 3"
    />
    <Card
      title="Chatbot"
      image={chatbot}
      newTitle="Chatbot"
      newDescription="Description of new content 4"
    />
    <Card
      title="Chatting"
      image={chat}
      newTitle="Chatting"
      newDescription="Includes a messaging system for communication between job seekers and employers/recruiters.
      Notifications for new messages or job updates."
    />
    <Card
      title="Matching System"
      image={matching}
      newTitle="Matching System"
      newDescription="Implement filters for job categories, location, and other relevant criteria.
      Allow users to perform advanced searches based on specific qualifications or skills.
   "
    />
  </div>
</div>

      </div>

      <div className='footer'>
    

        <a>Contact us </a>
        <br></br>
        <br/>
        <br/>
        <a>@easylink.instagram.com</a>
        <br/>
        <br></br>
        <a>easylink@gmail.com</a>
        <br>  
        </br>  <br/>
        <a>+91 982345671</a>
      </div>
    </div>
  );
}
