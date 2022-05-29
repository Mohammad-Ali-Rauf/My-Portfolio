import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
      <nav className='nav-header'>
        <ul className='ul-header'>
            <h1 className='logo-text'>Mohammad Ali</h1>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/skills'>Skills</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/testimonials'>Testimonials</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
  )
}

export default Header
