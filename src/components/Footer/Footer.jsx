import React from 'react';

// Import icons
import { ImLinkedin } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

// Import Styles
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mohammad-ali-40689121b/"><ImLinkedin /></a>
        <a href="https://github.com/Mohammad-Ali-Rauf"><BsGithub /></a>
        <a href="https://twitter.com/MohammadAliRauf"><BsTwitter /></a>
      </div>
    </footer>
  )
}

export default Footer
