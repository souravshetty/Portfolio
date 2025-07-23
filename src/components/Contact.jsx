import React from "react";
import LightBar from "./LightBar";

const Contact = () => {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-white dark:bg-[#232946] py-16 px-4">
      <LightBar color="#22d3ee" glow="#22d3ee" />
      <h2 className="animated-gradient-text text-5xl font-bold mb-4 text-center">Get In Touch</h2>
      <p className="text-lg text-black dark:text-cyan-100 mb-10 text-center max-w-2xl">
        I'm actively looking for any new opportunities, my inbox is always open. Whether you have a question or want to hire me or just want to say hello, I'll try my best to get back to you!
      </p>
      <form className="w-full max-w-2xl bg-transparent flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex flex-col">
            <label htmlFor="name" className="mb-1 text-black dark:text-cyan-200">Name</label>
            <input id="name" type="text" placeholder="Full Name" className="bg-[#1a1a2e] border border-cyan-700 text-black dark:text-cyan-100 rounded px-4 py-3 focus:outline-none focus:border-cyan-400 transition" />
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="email" className="mb-1 text-black dark:text-cyan-200">Email</label>
            <input id="email" type="email" placeholder="email@example.com" className="bg-[#1a1a2e] border border-cyan-700 text-black dark:text-cyan-100 rounded px-4 py-3 focus:outline-none focus:border-cyan-400 transition" />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 text-black dark:text-cyan-200">Message</label>
          <textarea id="message" rows={5} placeholder="Your message..." className="bg-[#1a1a2e] border border-cyan-700 text-black dark:text-cyan-100 rounded px-4 py-3 focus:outline-none focus:border-cyan-400 transition resize-none" />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-2 rounded transition">Send</button>
        </div>
      </form>
      <hr className="w-full max-w-2xl border-cyan-900 my-10" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-black dark:text-cyan-200 text-base">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M21 8V7l-3 2-2-2-7 7 2 2-2 3h1l2-2 7-7 2 2 2-3z"/></svg>
          <span>kartavyabhayana1@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          <span>Vancouver<br/>BC, Canada</span>
        </div>
      </div>
    </section>
  );
};

export default Contact; 