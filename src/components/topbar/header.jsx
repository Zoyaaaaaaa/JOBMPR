// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// function Header() {
//   const [index, setIndex] = useState(0);
   
// const images = [
//     'https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg',
//     'https://th.bing.com/th/id/R.452134324761cba5c00c83a1d69fb520?rik=03zE6V1vIhOP6w&riu=http%3a%2f%2fimages.huffingtonpost.com%2f2016-08-12-1471031429-2271495-dreamjobaheadconcepts.jpg&ehk=nUvB4d5gjG0irvd5kdNa6CeDUYixCLigaZ3BMZT5tC8%3d&risl=&pid=ImgRaw&r=0',
//     // Add more image URLs as needed
//   ];
//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <ExampleCarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Header;
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Header() {
  const [index, setIndex] = useState(0);

  const images = [
    'https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg',
    'https://th.bing.com/th/id/R.452134324761cba5c00c83a1d69fb520?rik=03zE6V1vIhOP6w&riu=http%3a%2f%2fimages.huffingtonpost.com%2f2016-08-12-1471031429-2271495-dreamjobaheadconcepts.jpg&ehk=nUvB4d5gjG0irvd5kdNa6CeDUYixCLigaZ3BMZT5tC8%3d&risl=&pid=ImgRaw&r=0',
    // Add more image URLs as needed
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((image, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${idx + 1}`}
          />
          <Carousel.Caption>
            <h3>{`Slide ${idx + 1} label`}</h3>
            <p>Where ooprtunities meet talent!</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Header;
