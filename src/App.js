import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/skills' element={<Skills />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/testimonials' element={<Testimonials />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
