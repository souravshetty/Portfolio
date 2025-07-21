import React, { useState } from "react";

// Import SVGs
import html from '../assests/html.svg';
import css from '../assests/css.svg';
import js from '../assests/js.svg';
import typescript from '../assests/typescript.svg';
import java from '../assests/java.svg';
import python from '../assests/python.svg';
import react from '../assests/react.svg';
import angular from '../assests/angular.svg';
import node from '../assests/node.svg';
import express from '../assests/express.svg';
import sql from '../assests/sql.svg';
import nosql from '../assests/nosql.svg';
import aws from '../assests/aws.svg';
import firebase from '../assests/firebase.svg';
import docker from '../assests/docker.svg';
import git from '../assests/git.svg';
import jwt from '../assests/jwt.svg';
import figma from '../assests/figma.svg';
import illustrator from '../assests/illustrator.svg';
import wordpress from '../assests/wordpress.svg';
import bootstrap from '../assests/bootstrap.svg';

// Import your coding GIF (assume it's named coding.gif and placed in assests)
import codingGif from '../assests/coding.gif';
import '../index.css'; // Ensure custom animation is available
import LightBar from "./LightBar";

const skillData = [
  // Languages
  { name: 'HTML', icon: html, category: 'Languages' },
  { name: 'CSS', icon: css, category: 'Languages' },
  { name: 'JavaScript', icon: js, category: 'Languages' },
  { name: 'TypeScript', icon: typescript, category: 'Languages' },
  { name: 'Java', icon: java, category: 'Languages' },
  { name: 'Python', icon: python, category: 'Languages' },
  // Frontend
  { name: 'React', icon: react, category: 'Frontend' },
  { name: 'Angular', icon: angular, category: 'Frontend' },
  { name: 'Bootstrap', icon: bootstrap, category: 'Frontend' },
  // Backend
  { name: 'Node JS', icon: node, category: 'Backend' },
  { name: 'Express', icon: express, category: 'Backend' },
  { name: 'JWT', icon: jwt, category: 'Backend' },
  // Databases
  { name: 'SQL', icon: sql, category: 'Backend' },
  { name: 'NoSQL', icon: nosql, category: 'Backend' },
  // Cloud/DevOps
  { name: 'AWS', icon: aws, category: 'Backend' },
  { name: 'Firebase', icon: firebase, category: 'Backend' },
  { name: 'Docker', icon: docker, category: 'Backend' },
  // Tools/Design
  { name: 'Git', icon: git, category: 'Others' },
  { name: 'Figma', icon: figma, category: 'Design' },
  { name: 'Illustrator', icon: illustrator, category: 'Design' },
  { name: 'Wordpress', icon: wordpress, category: 'Others' },
];

const categories = [
  'All',
  'Languages',
  'Frontend',
  'Backend',
  'Design',
  'Others',
];

const Skills = () => {
  const [filter, setFilter] = useState('All');
  const filteredSkills = filter === 'All' ? skillData : skillData.filter(s => s.category === filter);
  const headingRef = React.useRef(null);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      {/* Centered LightBar and Heading */}
      <div className="w-full flex flex-col items-center justify-center">
        <LightBar headingRef={headingRef} widthOffset={120} />
        <h2 ref={headingRef} className="relative z-30 text-5xl font-bold mb-6 animated-gradient-text text-center">Skills</h2>
      </div>
      {/* Two-column grid: GIF + Skills */}
      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-20 items-stretch justify-center rounded-2xl p-8 shadow-lg">
        {/* Left: Coding GIF */}
        <div className="md:w-1/2 w-full flex justify-center items-center md:min-h-[700px] min-h-[350px]">
          <img src={codingGif} alt="Coding" className="w-[40rem] h-[40rem] max-w-full max-h-[90vh] object-contain mx-auto shadow-[0_0_40px_0_rgba(34,211,238,0.3)]" />
        </div>
        {/* Right: Filters and skills grid */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1 rounded border border-cyan-400 text-cyan-300 font-mono text-sm transition-all ${filter === cat ? 'bg-cyan-400 text-gray-900 dark:text-gray-900' : 'hover:bg-cyan-700 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {filteredSkills.map(skill => (
              <div key={skill.name} className="flex flex-col items-center gap-2 animate-glow rounded-full">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                <span className="text-cyan-200 font-mono text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 