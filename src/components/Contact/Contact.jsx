import React, { useRef } from 'react';

// Import EmailJS for sending emails without backend
import emailjs from '@emailjs/browser';

// Import Icons
import { FiMail } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

// Import Styles
import './Contact.css';

const Contact = () => {

  const form = useRef();

  const onSubmit = e => {
    e.preventDefault();
    emailjs.sendForm('mail', 'send_email', form.current, 'user_O3y1kXCKWXkY4Hl9fe7Os');
    e.target.reset();
  }

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <FiMail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>m.aliadnanrauf@gmail.com</h5>
              <a href="mailto:m.aliadnanrauf@gmail.com">Send a Message</a>
            </article>
            <article className="contact__option">
              <FaTwitter className='contact__option-icon' />
              <h4>Twitter</h4>
              <h5>@MohammadAliRauf</h5>
              <a href="https://twitter.com/MohammadAliRauf" target="_blank" rel="noopener noreferrer">Send a Message</a>
            </article>
            <article className="contact__option">
              <BsLinkedin className='contact__option-icon' />
              <h4>Linkedin</h4>
              <h5>mohammad-ali-40689121b</h5>
              <a href="https://www.linkedin.com/in/mohammad-ali-40689121b/" target="_blank" rel="noopener noreferrer">Send a Message</a>
            </article>
        </div>
        <form ref={form} onSubmit={onSubmit}>
            <input type="text" name="name" placeholder='Full Name' required />
            <input type="email" name="email" placeholder='Email' required />
            <textarea name="message" rows='7' placeholder='Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
