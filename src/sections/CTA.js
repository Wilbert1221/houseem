import React, {useState} from 'react';
import '../styles/cta.css';
import axios from 'axios';


import left from '../assets/left.svg';
import right from '../assets/right.svg';

const url = 'https://sheet.best/api/sheets/186b3342-1b09-47ba-abad-8dfbda8212a0';

function CTA() {

  const [email, setEmail] = useState("")

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleClick = async(e) => {
    e.preventDefault();
    try{
        const date = new Date().toString();
        console.log(email, date)
        axios.post(url, {email, date})
        setEmail('');
    }
    catch(error){
        console.log(error);
    }
}
  return (

    
    <section id = 'waitlist' className="cta">
      <p className='cta-text'> Want to learn more? Join the waitlist</p>
      <div className = 'button-container'>
        <div className= 'input-button' >
           <input 
            className="cta-input no-outline"
            type="email"
            name = "email"
            placeholder="  enter email address:"
            value = {email}
            onChange = {handleChange}>
            </input>
            <button 
            id="email"
            className="cta-button"
            type = "submit"
            onClick={handleClick}> Join Waitlist 
            </button>
	      </div>
      </div>
      <div className="cta-ghost"></div>
      <img className= 'cta-image left' src={left} alt ='technology'></img>
      <img className= 'cta-image right' src={right} alt ='people collaborating'></img>
    </section>
  )
}

export default CTA;