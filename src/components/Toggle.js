import React from 'react'
import '../styles/toggle.css'


function Toggle({setActive}) {

  const setTenant = () => {
    setActive('tenant');
  }

  const setLandlord = () => {
    setActive('landlord');
  }

  return (
    <div className= "toggle-container">
    <button className = "toggle button" onClick={setTenant}>
        Tenants
    </button> 
    <button className = "toggle button" onClick={setLandlord}>
        Landlords
    </button> 
    </div>
  )
}

export default Toggle