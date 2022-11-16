import React from 'react';
import '../styles/security.css';

import blackbox from '../assets/blackbox.svg';

function Card({name, text, image}) {
  return (
    <div className='card'>
        <p className='card-header'>
            {name}
        </p>
        <p className='card-text'>
            {text}
        </p>
        <img className='card-image' src={image}>
        </img>

    </div>
  )
}

export default Card;