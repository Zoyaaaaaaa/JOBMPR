import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';

import facebookIcon from '../../../public/images/facebook-icon.jpg';
import twitterIcon from '../../../public/images/twitter-icon.jpg';
import googleIcon from '../../../public/images/google-icon.jpg';
// import instagramIcon from '../../../public/images/instagram-icon.png';
import linkedinIcon from '../../../public/images/linkedin-icon.jpg';


export default function Footer() {
  const iconSize = '30px'; // Define the size of the icons here

  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" className='m-1' href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <img src={facebookIcon} alt="Facebook" style={{ width: iconSize, height: iconSize }} />
          </MDBBtn>

          <MDBBtn outline color="light" className='m-1' href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <img src={twitterIcon} alt="Twitter" style={{ width: iconSize, height: iconSize }} />
          </MDBBtn>

          <MDBBtn outline color="light" className='m-1' href='https://google.com' target='_blank' rel='noopener noreferrer'>
            <img src={googleIcon} alt="Google" style={{ width: iconSize, height: iconSize }} />
          </MDBBtn>

          {/* <MDBBtn outline color="light" className='m-1' href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <img src={instagramIcon} alt="Instagram" style={{ width: iconSize, height: iconSize }} />
          </MDBBtn> */}

          <MDBBtn outline color="light" className='m-1' href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <img src={linkedinIcon} alt="LinkedIn" style={{ width: iconSize, height: iconSize }} />
          </MDBBtn>

          {/* <MDBBtn outline color="light" className='m-1' href='https://github.com' target='_blank' rel='noopener noreferrer'>
            <img src={githubIcon} alt="Github" style={{ width: iconSize, height: iconSize }} />
          </MDBBtn> */}
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          CodeCrafters.com
        </a>
      </div>
    </MDBFooter>
  );
}
