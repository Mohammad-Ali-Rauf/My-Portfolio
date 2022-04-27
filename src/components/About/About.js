import React from 'react';
import Header from '../Header/Header';
import './About.css';

function About() {
  return (
    <div className='about-us'>
      <div className='about__header'>
        <Header background="#F8CB2E" />
      </div>
      <h4 className='about__heading'>About Me</h4>
      <h5 className='about__body'>Hi! My name is Ali. I am 13 years old and doing O'Level right now.</h5>
    </div>
  )
}

export default About
