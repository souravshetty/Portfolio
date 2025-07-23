import React, { useRef } from "react";
import { FaCode, FaServer, FaCloud, FaCheckCircle } from "react-icons/fa";
import webDesignGif from "../assests/web design.gif";
import dataSecurityGif from "../assests/DATA SECURITY.gif";
import apiIntegrationGif from "../assests/API Integration.gif";
import hostingGif from "../assests/Hosting.gif";
import LightBar from "./LightBar";

const items = [
  {
    icon: <FaCode size={32} className="text-cyan-400" />,
    title: "Frontend Development",
    desc: [
      "Building complex, interactive user interfaces using React.js.",
      "Developing large-scale web applications with state management libraries such as Redux.",
      "Creating responsive web applications for all devices.",
      "Implementing modern UI/UX best practices."
    ],
    gif: webDesignGif,
  },
  {
    icon: <FaServer size={32} className="text-cyan-400" />,
    title: "Backend Development",
    desc: [
      "Designing scalable RESTful APIs and server logic with Node.js & Express.",
      "Implementing authentication, authorization, and security best practices.",
      "Integrating with SQL & NoSQL databases.",
      "Optimizing performance and reliability for production."
    ],
    gif: apiIntegrationGif,
  },
  {
    icon: <FaCloud size={32} className="text-cyan-400" />,
    title: "Cloud Solutions",
    desc: [
      "Deploying and scaling apps on AWS, Azure, and serverless platforms."
    ],
    gif: hostingGif,
  },
];

const WhatIDo = () => {
  const headingRef = useRef(null);
  return (
    <section className="w-full py-16 bg-white dark:bg-[#232946] flex flex-col items-center" id="what-i-do">
      <LightBar color="#22d3ee" glow="#22d3ee" headingRef={headingRef} widthOffset={350} />
      <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-4 text-white animated-gradient-text text-center">What I do</h2>
      <p className="text-lg text-black dark:text-cyan-300 mb-10 text-center max-w-2xl">
        I help businesses and individuals bring their ideas to life with modern web technologies, scalable cloud solutions, and beautiful user experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {items.map((item) => (
          <div key={item.title} className="whatido-card rounded-xl shadow-lg border border-cyan-900 transition h-96 text-[#1a1a2e] dark:text-cyan-100">
            <div className="whatido-card-inner w-full h-full">
              <div className="whatido-card-front">
                <h3 className="text-2xl font-semibold text-cyan-300 mb-3 mt-6">{item.title}</h3>
                <div className="mb-4">{item.icon}</div>
                {item.gif && (
                  <img src={item.gif} alt={item.title + ' gif'} className="mt-2 w-full max-h-44 object-contain rounded-lg shadow" />
                )}
              </div>
              <div className="whatido-card-back w-full flex flex-col gap-3 px-2 text-cyan-300">
                {Array.isArray(item.desc) ? (
                  item.desc.map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-[#232946] rounded-lg px-4 py-3 shadow-sm">
                      <FaCheckCircle className="text-cyan-400" />
                      <span className="text-base text-cyan-300 text-left">{text}</span>
                    </div>
                  ))
                ) : (
                  <span className="text-base text-cyan-300 text-left">{item.desc}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo; 