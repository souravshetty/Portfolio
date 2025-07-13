import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col">
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
