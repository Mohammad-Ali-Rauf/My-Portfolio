import Header from '../Header/Header';
import { NavLink } from 'react-router-dom';
import ProfileImage from '../../images/profile.png';
import './Home.css';

function Home() {
    return (
      <div className='home'>
        <Header />
        <div className='home__body'>
          <h4 className='tagline'>
            MY NAME IS MOHAMMAD ALI.
          </h4>
          <h1 className='title'>
            I'm a React JS
            <br />
            Web Developer
          </h1>
          <h5 className='sub-title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae omnis ex perferendis repellendus ea impedit voluptatum, consectetur minima voluptates distinctio explicabo fuga.</h5>
        </div>
        <div className='profileImg'>
          <img className='profile' src={ProfileImage} alt="" />
        </div>
        <div className='buttons'>
          <button className="btn-l-m"><NavLink to="/about">Learn More</NavLink></button>
        </div>
      </div>
    );
}

export default Home;