import React from 'react';
import GithubFinderImg from '../../assets/github-finder.png';
import VideoChatImg from '../../assets/video-chat.png';
import SeatSelectorImg from '../../assets/seat-selector.png';
import FormValidationImg from '../../assets/form-validation.png';

// Import Styles
import './Portfolio.css';

// data array
const data = [
  {
    id: 1,
    image: GithubFinderImg,
    title: 'Github Users Finder',
    completed: false,
    skillsUsed: ['REACT JS', 'HTML5', 'CSS3'],
    github: 'https://github.com/Mohammad-Ali-Rauf/Github-Finder',
    live: 'https://github-finder-ali.netlify.app',
  },
  {
    id: 2,
    image: VideoChatImg,
    title: 'Video Chat',
    completed: false,
    skillsUsed: ['REACT JS ', 'HTML5', 'MATERIAL UI'],
    github: 'https://github.com/Mohammad-Ali-Rauf/Video-Chat',
    live: 'https://video-chat-app-ali.netlify.app',
  },
  {
    id: 3,
    image: SeatSelectorImg,
    title: 'Movie Seat Selector',
    completed: false,
    skillsUsed: ['HTML5', 'CSS3', 'JAVASCRIPT'],
    github: 'https://github.com/Mohammad-Ali-Rauf/Seat-Selector',
    live: 'https://movie-seat-selector.netlify.app/',
  },
  {
    id: 4,
    image: FormValidationImg,
    title: 'HTML Form Validation',
    completed: true,
    skillsUsed: ['HTML5', 'CSS3', 'JAVASCRIPT'],
    github: 'https://github.com/Mohammad-Ali-Rauf/html-form-validation',
    live: 'https://html-form-validation-ali.netlify.app'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, completed, skillsUsed, github, live }) => (
          <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <h4 style={{ marginBottom: '25px', }}>Skills Used: <span style={{ color: 'lightgrey' }}>{String(skillsUsed.join(', '))}</span></h4>
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
