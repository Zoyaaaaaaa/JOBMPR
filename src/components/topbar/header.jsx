import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function JobPortalCarousel() {
  // const carouselContainerStyle = {
  //   height: '250px',  // Adjust the height according to your requirements
  //   background: '#f0f0f0',  // Set your desired background color
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginBottom:'19rem',
  // };

  return (
    // <div className='carousel-container' style={carouselContainerStyle}>
      <Carousel style={{ width: '100%' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/job3.jfif"
            alt="Your Dream Job Awaits"
          />
          <Carousel.Caption>
            <h3>Your Dream Job Awaits</h3>
            <p>Explore exciting opportunities from top companies.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/job4.jpg"
            alt="Find the Perfect Match"
          />
          <Carousel.Caption>
            <h3>Find the Perfect Match</h3>
            <p>Discover jobs that match your skills and interests.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/job2.jfif"
            alt="Build Your Career"
          />
          <Carousel.Caption>
            <h3>Build Your Career</h3>
            <p>Take the next step in your professional journey.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    // </div>
  );
}

export default JobPortalCarousel;
