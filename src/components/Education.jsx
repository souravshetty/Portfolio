import React from "react";

const education = [
  {
    school: "Humber Polytechnic",
    degree: "Graduate Certificate in Information Technology",
    date: "2023 - 2025",
    logo: "https://rajatsachdeva.me/_next/image?url=%2Fimages%2Fhumber.png&w=64&q=75",
  },
  {
    school: "Indraprastha University",
    degree: "Bachelor's of Technology in Information Technology",
    date: "2018 - 2021",
    logo: "https://rajatsachdeva.me/_next/image?url=%2Fimages%2Fipu.png&w=64&q=75",
  },
];

const Education = () => (
  <section className="max-w-2xl mx-auto mb-10 px-4">
    <h2 className="text-2xl font-semibold mb-4">Education</h2>
    <div className="space-y-6">
      {education.map((edu) => (
        <div key={edu.school} className="flex items-center space-x-4 bg-white rounded-lg shadow p-4">
          <img src={edu.logo} alt={edu.school} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h3 className="font-bold text-lg">{edu.school}</h3>
            <div className="text-sm text-gray-600">{edu.degree}</div>
            <div className="text-xs text-gray-400">{edu.date}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education; 