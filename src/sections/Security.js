import React from 'react';
import '../styles/security.css';

import Card from '../components/Card.js'

import blackbox from '../assets/blackbox.svg';
import guarantee from '../assets/guarantee.svg';
import personal from '../assets/personal.svg';
import protection from '../assets/protection.svg';
import surveillance from '../assets/surveillance.svg';



function Security() {
  return (
    <section id ='security' className='security-container'>
        <p className='security-header'>
            What is blackbox?
            <img  className = 'security-logo' src={blackbox}></img>
        </p>
        <p className = 'security-text'> blackbox is the security engine that ensures that housem is able to protect a user's data. The protection of personal data is a high priority issue for users and data privacy is central to housem. </p>
        <div className='card-container'>
            <Card name = {'100% Guarantee'} text = "100% transparency. Code is completely visible with open source review opportunities" image = {protection}/>
            <Card name = {'Personal Data'} text = "Users should be able to leverage their personal data for their benefit without worry" image = {personal}/>
            <Card name = {'Cutting Edge'} text = "Connects data encrpytion and Machine Learning to dually benefit and protect users" image = {guarantee}/>
            <Card name = {'Surveillance Proof'} text = "We can't see the data for individuals users ourselves so we cannot misuse data" image = {surveillance}/>
        </div>
        <div className = 'design-stripe'>
          Here
        </div>
    </section>
  )
}

export default Security;