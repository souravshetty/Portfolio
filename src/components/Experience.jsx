import React, { useRef } from "react";
import LightBar from "./LightBar";

const experiences = [
  {
    company: "Credwise",
    title: "Full Stack Developer",
    date: "Jan 2025 - Apr 2025",
    description:
      "Built a web app, ImmigrateX, using the MERN stack to help immigrants access housing, car rentals, and essential resources for transitioning to Canada. Designed and developed client onboarding features for realtors and car dealerships, including document uploads, soft credit checks, and service listings.",
    logo: "https://rajatsachdeva.me/_next/image?url=%2Fimages%2Fcredwise.png&w=64&q=75",
  },
  {
    company: "Humber Polytechnic",
    title: "Research Associate",
    date: "Nov 2024 - Dec 2024",
    description:
      "Built a comprehensive resource library by collecting and verifying video resources, literature, and website articles to bridge theoretical knowledge with practical applications. Developed a specialized library of resources focused on Advanced Java, C#, data structures, and design patterns, supporting students and educators in mastering these critical technical topics.",
    logo: "https://rajatsachdeva.me/_next/image?url=%2Fimages%2Fhumber.png&w=64&q=75",
  },
  {
    company: "Coforge",
    title: "Software Engineer",
    date: "May 2021 - Aug 2023",
    description:
      "Developed responsive web interfaces for the Lifewriter project, enhancing UI/UX for a leading US insurance company. Optimized application functionality by implementing React, Typescript, Spring Boot and SQL technologies, which decreased page load times by 20%. Enhanced team efficiency by actively participating in Agile ceremonies, collaborating with cross-functional teams and UI/UX designers to ensure brand consistency and accessibility.",
    logo: "https://rajatsachdeva.me/_next/image?url=%2Fimages%2Fcoforge.png&w=64&q=75",
  },
];

const Experience = () => {
  const headingRef = useRef(null);
  return (
    <section className="max-w-2xl mx-auto mb-10 px-4">
      <LightBar color="#22d3ee" glow="#22d3ee" headingRef={headingRef} />
      <h2 ref={headingRef} className="text-2xl font-semibold mb-4 text-center">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex items-start space-x-4 bg-white rounded-lg shadow p-4">
            <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h3 className="font-bold text-lg">{exp.company}</h3>
              <div className="text-sm text-gray-600">{exp.title}</div>
              <div className="text-xs text-gray-400 mb-1">{exp.date}</div>
              <p className="text-gray-700 text-sm">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 