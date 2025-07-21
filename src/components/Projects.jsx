import React, { useRef } from "react";
import LightBar from "./LightBar";

const projects = [
  {
    name: "Cryptex",
    date: "Jan 2025 - Mar 2025",
    description:
      "A real-time crypto trading simulator built with Next.js, TailwindCSS, and Prisma, allowing users to track live cryptocurrency prices, manage virtual portfolios, and execute simulated trades without financial risk. It features real-time price updates, trade history tracking, and portfolio performance insights to help users understand market trends in a risk-free environment.",
    tech: ["Next.js", "TypeScript", "PrismaORM", "PostgreSQL", "Clerk", "Vercel", "Charts", "Shadcn", "TailwindCSS"],
    website: "#",
    source: "#",
    image: "https://rajatsachdeva.me/_next/image?url=%2Fimages%2Fcryptex.png&w=384&q=75",
  },
  {
    name: "FormFlow",
    date: "Nov 2024 - Dec 2024",
    description:
      "A customizable drag-and-drop form builder designed to simplify form creation and data collection. Built with Next.js, Dnd-kit, and Prisma, it enables users to create interactive forms, share them in real time, and track responses efficiently. With features like real-time collaboration, analytics, and seamless UI, FormFlow makes form-building intuitive and hassle-free.",
    tech: ["Next.js", "TypeScript", "PrismaORM", "PostgreSQL", "Clerk", "Vercel", "Dnd-kit", "Shadcn", "TailwindCSS"],
    website: "#",
    source: "#",
    image: "https://rajatsachdeva.me/_next/image?url=%2Fimages%2Fformflow.png&w=384&q=75",
  },
];

const Projects = () => {
  const headingRef = useRef(null);
  return (
    <section className="max-w-4xl mx-auto mb-10 px-4">
      <LightBar color="#22d3ee" glow="#22d3ee" headingRef={headingRef} />
      <h2 ref={headingRef} className="text-2xl font-semibold mb-4 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.name} className="bg-white rounded-lg shadow p-4 flex flex-col">
            <img src={project.image} alt={project.name} className="rounded mb-3 h-40 object-cover" />
            <h3 className="font-bold text-xl mb-1">{project.name}</h3>
            <div className="text-xs text-gray-400 mb-1">{project.date}</div>
            <p className="text-gray-700 text-sm mb-2">{project.description}</p>
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