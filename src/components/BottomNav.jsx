import React, { useState, useEffect } from "react";
import { FaHome, FaRegFileAlt, FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { LiaXing } from "react-icons/lia"; // X (Twitter) alternative

const navItems = [
  { href: "#home", icon: <FaHome size={22} />, label: "Home" },
  { href: "/sourav_resume.pdf", icon: <FaRegFileAlt size={22} />, label: "Resume", external: true },
  { href: "https://github.com/souravshetty", icon: <FaGithub size={22} />, label: "GitHub", external: true },
  { href: "https://www.linkedin.com/in/sourav-s-shetty/", icon: <FaLinkedin size={22} />, label: "LinkedIn", external: true },
];

const BottomNav = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full shadow-lg flex items-center px-2 py-2 gap-2 border border-gray-200 dark:border-gray-700 w-[96vw] max-w-xs md:max-w-lg md:px-6 md:py-2 md:gap-4" style={{boxSizing: 'border-box'}}>
      {navItems.map((item, idx) => (
        <React.Fragment key={item.label}>
          <a
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="group p-2 rounded-full transition-colors duration-150 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white text-inherit dark:text-cyan-300"
            title={item.label}
            onClick={item.label === "Home" ? (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } : undefined}
          >
            {item.icon}
          </a>
          {(idx === 0 || idx === 1 || idx === navItems.length - 1) && idx !== navItems.length - 1 ? (
            <span className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1" />
          ) : null}
        </React.Fragment>
      ))}
      <span className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1" />
      <button
        className="group p-2 rounded-full transition-colors duration-150 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
        title="Toggle Theme"
        onClick={() => setDark((d) => !d)}
      >
        {dark ? <FaSun size={22} /> : <FaMoon size={22} />}
      </button>
    </nav>
  );
};

export default BottomNav; 