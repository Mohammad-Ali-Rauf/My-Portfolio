import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ background }) => {
  return (
      <nav className='nav-header' style={{ backgroundColor: background }}>
        <ul className='ul-header'>
            <h1 className='logo-text'>Mohammad Ali</h1>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
  )
}

export default Header
