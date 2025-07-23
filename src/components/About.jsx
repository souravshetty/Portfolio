import React, { useEffect, useState } from "react";
import DecorativeLines from "./DecorativeLines";


const phrases = [
  "A JavaScript enthusiast",
  "A Frontend Developer",
  "A Backend Developer",
];

const About = () => {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (phraseIndex < phrases.length) {
      if (charIndex < phrases[phraseIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentPhrase((prev) => prev + phrases[phraseIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        // Wait 1s, then move to next phrase (loop infinitely)
        const timeout = setTimeout(() => {
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setCharIndex(0);
          setCurrentPhrase("");
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, phraseIndex]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((c) => !c);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-cyan-300 relative bg-white dark:bg-[#232946]">
      <DecorativeLines />
      {/* Blurred color background */}
      {/* Greeting */}
      <div className="mt-8 text-center z-20 flex flex-col items-center space-y-2 relative">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none -z-10">
          <div className="w-64 h-12 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 opacity-30 blur-xl animate-pulse" />
        </div>
        <span className="h-10 mt-2 text-lg md:text-2xl font-normal text-cyan-300 relative">
          {currentPhrase}
          <span className="inline-block w-2">{showCursor ? "|" : " "}</span>
        </span>
      </div>
      {/* Description */}
      <p className="mt-6 text-lg max-w-2xl text-center z-10 text-cyan-300">
        Highly motivated and enthusiastic Full Stack Developer with experience in designing, developing and maintaining web applications using technologies such as JavaScript, React, Node.js.
      </p>
      {/* Social Icons */}
      <div className="flex gap-6 mt-8 z-10">
        <a href="https://github.com/souravshetty" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/sourav-s-shetty/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
        </a>
      </div>
    </section>
  );
};

export default About; 