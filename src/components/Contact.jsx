import React, { useRef, useState, useEffect } from "react";
// import LightBar from "./LightBar";
import DecorativeLines from "./DecorativeLines";
import { FaEnvelope } from "react-icons/fa";
import vancouverMap from "../assests/vancouver-map.png"; // You need to add this image to your assets folder
import gmailLogo from '../assests/gmail-logo.png'; // Place your Gmail logo image in the assets folder

const Contact = () => {
  const headingRef = useRef(null);
  const phrases = [
    "Hey I'm here",
    "I'm looking for a Job",
    "Lets connect",
    "lets work together",
    "Based in Vancouver"
  ];
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      setCurrentPhrase(phrases[(phraseIndex + 1) % phrases.length]);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [phraseIndex]);
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center bg-white dark:bg-[#232946] py-16 px-4">
      <DecorativeLines />
      {/* <LightBar color="#22d3ee" glow="#22d3ee" headingRef={headingRef} widthOffset={380} /> */}
      <h2 ref={headingRef} className="animated-gradient-text text-5xl font-bold mb-4 text-center">Get In Touch</h2>
      <p className="text-lg text-black dark:text-cyan-100 mb-10 text-center max-w-2xl">
        I'm actively looking for any new opportunities, my inbox is always open. As a passionate developer, I’m eager to learn, grow, and contribute. If you have any questions, opportunities, or simply wish to say hello, I’d be delighted to hear from you.
      </p>
      <form className="w-full max-w-2xl bg-transparent flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex flex-col">
            <label htmlFor="name" className="mb-1 text-black dark:text-cyan-200">Name</label>
            <input id="name" type="text" placeholder="Full Name" className="bg-[#1a1a2e] border border-cyan-700 text-black dark:text-cyan-100 rounded px-4 py-3 focus:outline-none focus:border-cyan-400 transition" />
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="email" className="mb-1 text-black dark:text-cyan-200">Email</label>
            <input id="email" type="email" placeholder="email@example.com" className="bg-[#1a1a2e] border border-cyan-700 text-black dark:text-cyan-100 rounded px-4 py-3 focus:outline-none focus:border-cyan-400 transition" />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 text-black dark:text-cyan-200">Message</label>
          <textarea id="message" rows={5} placeholder="Your message..." className="bg-[#1a1a2e] border border-cyan-700 text-black dark:text-cyan-100 rounded px-4 py-3 focus:outline-none focus:border-cyan-400 transition resize-none" />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-2 rounded transition">Send</button>
        </div>
      </form>
      <hr className="w-full max-w-2xl border-cyan-900 my-10" />
      {/* Email Button */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=Souravsadashivashetty@gmail.com&su=Contact&body=Hi%20Sourav%20Sadashiva%20Shetty," 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-br from-[#232946] to-[#1a1a2e] rounded-lg px-4 py-2 shadow text-white font-semibold text-lg hover:scale-105 transition-transform mb-4"
      >
        <img src={gmailLogo} alt="Gmail" className="w-8 h-8" />
        <span>Email</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14" /></svg>
      </a>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-black dark:text-cyan-200 text-base">
        {/* <div className="flex items-center gap-2">
          <FaEnvelope />
          <span>Souravsadashivashetty@gmail.com</span>
        </div> */}
        {/* <div className="flex items-center gap-2">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <span>Vancouver<br/>BC, Canada</span>
        </div> */}
      </div>
      <div className="flex flex-col items-center justify-center w-full my-8">
        <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-lg" style={{ background: '#0a192f' }}>
          <img src={vancouverMap} alt="Vancouver, BC Map" className="w-full h-72 object-cover" />
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 shadow min-w-[200px] max-w-[90%]">
            <span role="img" aria-label="face" style={{ fontSize: 24 }}>🙂</span>
            <span className="text-cyan-500 text-base font-medium whitespace-nowrap">{currentPhrase}<span className="text-cyan-200">|</span></span>
          </div>
          <div className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-70 rounded-lg px-5 py-2 shadow text-white text-lg font-semibold">
            Vancouver, BC
          </div>
          
        </div>
      </div>
      <footer className="text-center py-6 text-cyan-400 text-sm border-t mt-50">
  &copy; {new Date().getFullYear()} Designed and Developed by <strong>Sourav Shetty</strong>. All rights reserved.
</footer>
    </section>
    
  );
};

export default Contact; 