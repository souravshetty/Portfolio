import React from "react";

const Header = () => (
  <header className="flex flex-col items-center mt-10 mb-8 text-center">
    <img
      src="https://res.cloudinary.com/dp7ltmmy8/image/upload/v1752208229/sourav_unwues.jpg"
      alt="Profile"
      className="w-40 h-40 rounded-full mb-4 border-4 border-gray-200 shadow-lg"
    />
    <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I'm Sourav Shetty <span role="img" aria-label="wave">👋</span></h1>
    <h2 className="text-lg md:text-xl font-medium text-gray-700 mb-2">
      Full Stack Software Engineer | AWS & Azure Certified
    </h2>
    <p className="text-gray-600 max-w-xl">
      React.js | Next.js | Node.js | Python | Frontend Specialist
    </p>
  </header>
);

export default Header; 