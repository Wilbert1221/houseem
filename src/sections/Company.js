import React, {useState} from 'react'
import Toggle from '../components/Toggle';
import '../styles/company.css'

import light from '../assets/load-light.svg';
import tenant from '../assets/tenant.webp';
import landlord from '../assets/landlord.webp';

function Company() {
  const [active, setActive] = useState(null);
  const renderConditional = () => {
    if(active === 'tenant'){
      return(
        <>
        <p className='company-header'>
          Anyone can qualify
      </p>
      <p className='company-text'>
          housem makes it easier for anyone to qualify 'being able to make rent' by securely leveraging data often overlooked. housem ensures that user data is completely protected.
      </p>
      <img className ='mockup' src ={tenant} alt ='iphone mockup rental listings'></img>
        </>
      )
    }
    if(active === 'landlord'){
      return(
        <>
        <p className='company-header'>
          Someone's always looking
      </p>
      <p className='company-text'>
          housem increases the pool of verified potential tenants for landlords by using traditional and alternative scoring methods to score tenants. 
      </p>
      <img className ='mockup' src ={landlord} alt ='iphone mockup dashboard'></img>
        </>
      )
    }
    else{
    return(
      <>
      <p className='company-header'>
          Easier for Everyone
      </p>
      <p className='company-text'>
          housem facilitates the tenant screening process for landlords and tenants alike by leverage secure ML algorithms that score tenants and properties to increase tenant access to properties while also providing tenants more 
      </p>
      <img className ='mockup' src ={light} alt ='iphone mockup loaing screen'></img>
      </>
    );
    }
  }

    return (
      <section id='company'className='company-container'>
        <Toggle active = {active} setActive = {setActive}/>
        {renderConditional()}
      </section>
  );
  
}

export default Company;