import React, { useState } from 'react';
import './Card.scss';

const Card = ({ title, image, newTitle, newDescription }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={flipCard}>
      <div className="card-front">
        <h5>{title}</h5>
        <img src={image} alt={title} /> 
        <button>See More</button>
      </div>
      <div className="card-back">
        <h5>{newTitle}</h5>
        <p>{newDescription}</p>
        <button>Flip Back</button>
      </div>
    </div>
  );
};

export default Card;