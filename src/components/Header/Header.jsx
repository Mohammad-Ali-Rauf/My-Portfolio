import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/profile.png'

// Import Styles
import './Header.css';

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mohammad Ali</h1>
        <h5 className='text-light'>React JS/Next JS Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
