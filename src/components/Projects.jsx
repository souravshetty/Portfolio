import React, { useRef } from "react";
import LightBar from "./LightBar";
import pedalPatchImg from "../assests/PedalPatch (2).jpg";
import kyntraImg from "../assests/kyntra1.JPG";
import streetSightImg from "../assests/StreetSight1.jpg";


const projects = [
  {
    name: "StreetSight",
    date: "Jan 2025 - Mar 2025",
    description:
     "StreetSight is a powerful, web-based CRM solution built specifically for billboard and outdoor advertising businesses. It is developedto simplify and streamline day-to-day operations by offering a single, unified platform that helps you manage every aspect of your billboard business — from asset tracking to client billing.",
    tech: ["React.js", "TypeScript", "Node.js","Express.js", "MongoDB", "Vercel","Render" ,"CSS","GoogleMaps"],
    website: "https://streetsight.wmdd.ca/",
    source: "https://github.com/streetsight0",
    image: streetSightImg,
  },
  {
    name: "Kyntra",
    date: "May 2025 - August 2025",
    description:"Kyntra is a mobile app that helps individuals recovering from neck injuries by providing real-time posture feedback using face detection technology. It guides users through neck exercises with instant audio-visual cues, offers a structured video library, and connects them to nearby physiotherapists using location services",
    tech: ["ReactNative", "TypeScript", "Vision Camera","Node.js" ,"Express.js","Firebase","Cloudinary" ,"TailwindCSS"],
    // website: "#",
    source: "https://github.com/Capstonee-healthcare",
    image: kyntraImg,
  },
  {
    name: "PedalPatch",
    date: "2024",
    description:
      "Pedal Patch is a Progressive Web App (PWA) that helps cyclists request emergency assistance and schedule services when needed. It supports two user roles—service providers and customers—and offers portfolio management features for both, making roadside support and service coordination seamless and efficient.",
    tech: ["Javascript", "Firebase"],
    website: "#",
    source: "https://github.com/DebugDemons/Pedal_Patch",
    image: pedalPatchImg,
  },
];

const Projects = () => {
  const headingRef = useRef(null);
  return (
    <section className="max-w-4xl mx-auto mb-10 px-4">
      <LightBar color="#22d3ee" glow="#22d3ee" headingRef={headingRef} />
      <h2 ref={headingRef} className="relative z-30 animated-gradient-text text-5xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.name} className="bg-white dark:bg-[#1a1a2e] rounded-lg shadow p-2 flex flex-col text-[#1a1a2e] dark:text-cyan-100 animate-glow">
            <img src={project.image} alt={project.name} className="rounded mb-3 w-full object-contain max-h-72 bg-black" />
            <h3 className="font-bold text-xl mb-1">{project.name}</h3>
            <div className="text-xs text-gray-400 mb-1">{project.date}</div>
            <p className="text-gray-700 dark:text-cyan-300 text-sm mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tech.map((t) => (
                <span key={t} className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs font-medium shadow">{t}</span>
              ))}
            </div>
            <div className="mt-auto flex gap-2">
              <a href={project.website} className="bg-black text-white px-3 py-1 rounded text-xs" target="_blank" rel="noopener noreferrer">Website</a>
              <a href={project.source} className="bg-gray-700 text-white px-3 py-1 rounded text-xs" target="_blank" rel="noopener noreferrer">Source</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 