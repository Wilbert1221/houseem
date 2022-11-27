import React from 'react';
import '../styles/security.css';

function Card({name, text, image, alt}) {
  return (
    <div className='card'>
        <p className='card-header'>
            {name}
        </p>
        <p className='card-text'>
            {text}
        </p>
        <img className='card-image' alt={`${alt}`} src={image}>
        </img>

    </div>
  )
}

export default Card;