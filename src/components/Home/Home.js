import Header from '../Header/Header';
import ProfileImage from '../../images/profile.png';
import './Home.css';

function Home() {
    return (
      <div className='home'>
        <Header />
        <div className='home__body'>
          <h4 className='tagline'>
            GET EVERY SINGLE SOLUTIONS.
          </h4>
          <h1 className='title'>
            I'm a Web Developer 
            <br />  
            Mohammad Ali Rauf
          </h1>
          {/* <h5 className='sub-title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae omnis <br /> ex perferendis repellendus ea impedit voluptatum, consectetur minima voluptates distinctio <br /> explicabo fuga.</h5> */}
        </div>
        <div className='profileImg'>
          <img className='profile' src={ProfileImage} alt="" />
        </div>
      </div>
    );
}

export default Home;