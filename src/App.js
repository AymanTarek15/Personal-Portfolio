import React from 'react';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}



export default App;
