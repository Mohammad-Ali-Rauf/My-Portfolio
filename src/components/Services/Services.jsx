import React from 'react';
import { BiCheck } from 'react-icons/bi';

// Import Styles
import './Services.css';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3 style={{ color: '#E5E5E5' }}>Frontend Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Simple React JS Website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>HTML, CSS and Javascript</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
