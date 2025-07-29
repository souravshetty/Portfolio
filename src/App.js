import React from 'react';
import './App.css';
import Header from './components/Header';
import WhatIDo from './components/WhatIDo';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#232946]">
      <Header />
      
      <WhatIDo />
      <Skills />
      <Projects />
      {/* <Experience />
      <Education /> */}
      <Contact />
      {/* <Footer /> */}
      <BottomNav />
    </div>
  );
}

export default App;
