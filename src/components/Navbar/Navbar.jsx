import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { MdMiscellaneousServices } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { GiGraveyard } from 'react-icons/gi';
import { FaBriefcase } from 'react-icons/fa';

// Import Styles
import './Navbar.css';

const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BiBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdMiscellaneousServices /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaBriefcase /></a>
      <a href="#graveyard" onClick={() => setActiveNav('#graveyard')} className={activeNav === '#graveyard' ? 'active' : ''}><GiGraveyard /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Navbar
