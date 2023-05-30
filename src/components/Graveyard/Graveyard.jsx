import React from 'react';
import DarkImage from '../../assets/dark.png';
import CrowdFundingImage from '../../assets/crowdfunding.png';
import LoggerImage from '../../assets/logger.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Import Styles
import './Graveyard.css';

const Graveyard = () => {
  return (
    <section id='graveyard'>
      <h5>Failed and Abandoned Projects</h5>
      <h2 className='text-warning'>Graveyard</h2>

      <div id='carouselExample' class='carousel slide'>
        <div class='carousel-inner text-center'>
          <div class='carousel-item active'>
            <h4 className='mb-4'>Project Name: <span className='text-danger'>Dark Theme Toggle</span></h4>
            <img
              src={DarkImage}
              class='d-block mx-auto w-75 h-75 img-fluid'
              alt='Sorry... image not available!!!'
            />
          </div>
          <div class='carousel-item'>
            <h4 className='mb-4'>Project Name: <span className='text-danger'>Crowd Funding</span></h4>
            <img
              src={CrowdFundingImage}
              class='d-block mx-auto w-75 h-75 img-fluid'
              alt='Sorry... image not available!!!'
            />
          </div>
          <div class='carousel-item'>
          <h4 className='mb-4'>Project Name: <span className='text-danger'>IT Logger for Developers</span></h4>
            <img
              src={LoggerImage}
              class='d-block mx-auto w-75 h-75 img-fluid'
              alt='Sorry... image not available!!!'
            />
          </div>
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExample'
          data-bs-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carouselExample'
          data-bs-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
    </section>
  );
};

export default Graveyard;
