import React from 'react'
import logo from '../logo.svg';
import '../styles/nav.css'

function Nav() {
  return (
    <div className="nav-container">
        <div className='left'>
            <p>house</p>
            <img src={logo} className="app-logo" alt="logo" />
            <p>em</p>
        </div>
        <div className ='right'>
            <a className='right-link' href='#company'>Company</a>
            <a className='right-link' href='#security'>Security</a>
            <a className='right-link' href='#waitlist'>Waitlist</a>
            <a className='right-link' href='#contact'>Contact</a>
        </div>
    </div>
  )
}

export default Nav