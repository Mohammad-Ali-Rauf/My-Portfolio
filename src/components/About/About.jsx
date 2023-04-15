import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

// Import Styles
import './About.css';

const About = () => {

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <strong>1+ Year</strong>
            </article>

            <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Clients</h5>
                <strong> 1. Orange Fox Labs - Software Company</strong>
            </article>

            <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <strong>5+ Projects Completed</strong>
            </article>
          </div>

          <p>
            Hi! My name is Mohammad Ali, I live in Pakistan. I started Front-End Web Development in React JS 1 year ago. I am 13 years old, I am doing O'level.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
