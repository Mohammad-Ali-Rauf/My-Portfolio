import React from 'react';
import GithubFinderImg from '../../assets/github-finder.png';
import VideoChatImg from '../../assets/video-chat.png';
import ContactManagementImg from '../../assets/contact-management.png';
import BlogAppImg from '../../assets/blog-app.png'

// Import Styles
import './Portfolio.css';

// data array
const data = [
  {
    id: 1,
    image: GithubFinderImg,
    title: 'Github Users Finder',
    github: 'https://github.com/Mohammad-Ali-Rauf/Github-Finder',
    live: 'https://github-finder-ali.netlify.app',
  },
  {
    id: 2,
    image: VideoChatImg,
    title: 'Video Chat',
    github: 'https://github.com/Mohammad-Ali-Rauf/Video-Chat',
    live: 'https://video-chat-app-ali.netlify.app',
  },
  {
    id: 3,
    image: ContactManagementImg,
    title: 'Contact Manager',
    github: 'https://github.com/Mohammad-Ali-Rauf/contact-management-frontend',
    live: 'https://contact-manager-ali.netlify.app',
  },
  {
    id: 4,
    image: BlogAppImg,
    title: 'Blog App',
    github: 'https://github.com/Mohammad-Ali-Rauf/my-blog',
    live: 'https://contact-manager-ali.netlify.app',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        {data.map(({id, image, title, github, live}) => (
          <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>Github Repo</a>
              <a href={live} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live App</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
