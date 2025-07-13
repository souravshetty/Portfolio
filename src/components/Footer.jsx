import React from "react";

const Footer = () => (
  <footer className="text-center py-6 text-gray-500 text-sm border-t mt-10">
    &copy; {new Date().getFullYear()} Rajat Sachdeva. All rights reserved.
    <div className="flex justify-center gap-4 mt-2">
      <a href="https://github.com/rajatsachdeva" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
      <a href="https://linkedin.com/in/rajatsachdeva" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
      <a href="mailto:rajatsachdeva.me@gmail.com" className="hover:underline">Email</a>
    </div>
  </footer>
);

export default Footer; 