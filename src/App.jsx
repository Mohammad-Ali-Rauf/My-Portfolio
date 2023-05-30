import React from 'react';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Graveyard from './components/Graveyard/Graveyard';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Graveyard />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
