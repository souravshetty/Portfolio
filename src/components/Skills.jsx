import React from "react";

const skills = [
  "React.js", "Next.js", "Angular", "Node.js", "Express.js", "Redux", "Bootstrap", "Tailwind CSS", "ShadCN", "HTML", "CSS", "Javascript", "Typescript", "Python", "Java", "MySQL", "Oracle SQL", "PostgreSQL", "Firebase", "Wordpress", "Docker", "Git", "Github", "Github Actions", "Github Copilot", "Gitlab", "AWS", "Postman", "Vercel", "CursorAI"
];

const Skills = () => (
  <section className="max-w-2xl mx-auto mb-10 px-4">
    <h2 className="text-2xl font-semibold mb-4">Skills</h2>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow">
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills; 