import React, {useRef} from 'react';
import vid from '../assets/hero.mp4';
import '../styles/hero.css'

const Vid = () => { 
    const videoRef= useRef();
    const setPlayBack = () => {
      videoRef.current.playbackRate = 1.0;
      };
    return (
      <>
        <video
          ref={videoRef}
          className="hero-img" autoPlay muted loop
          onCanPlay={() => setPlayBack()}>
          <source src={vid} type="video/mp4" />
        </video>
      </>
    );
  }

  export default Vid;