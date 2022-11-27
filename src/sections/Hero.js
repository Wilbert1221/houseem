import React from 'react'
import Nav from '../components/Nav'
import '../styles/hero.css'

import load from '../assets/load-dark.svg';
import data from '../assets/data.webp';

function Hero() {
  return (
    <section className='hero-container'>
        <Nav/>
        <div className='hero'>
          <div className = 'h-texts'> 
            <p className='hero-header'> Anyone can qualify for an apartment </p>
            <p className='hero-text'> 
                Join housem for the easiest tenant screening process. Users have the widest range 
                of apartments to choose from curated to their preferences. Landlords have the
                largest selection of already screened ready to move-in tenants
            </p>
          </div>
            <img src = {load} className = 'mockup-hero' alt ='mockup loading page'></img>
            <img src = {data} className = 'bottom' alt ='mockup data input form'></img>
        </div>
    </section>
  )
}

export default Hero