import React from 'react';
import Header from '../Header/Header';
import './About.css';

function About() {
  return (
    <div className='about-us'>
      <div className='about__header'>
        <Header background="transparent" />
      </div>
      <h4 className='about__heading'>About Me</h4>
      <h5 className='about__body'>Lorem ipsum dolor sit amet consectetur.</h5>
    </div>
  )
}

export default About
