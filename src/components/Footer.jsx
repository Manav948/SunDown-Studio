import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-red-600 to-black text-white overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between px-10 md:px-20 py-16">
        {/* Left Links */}
        <div className="flex flex-col gap-4 text-lg font-semibold">
          <a href="/work" className="hover:opacity-70">
            Work
          </a>
          <a href="/studio" className="hover:opacity-70">
            Studio
          </a>
          <a href="/contact" className="hover:opacity-70">
            Contact
          </a>
        </div>

        {/* Newsletter */}
        <div className="mt-10 md:mt-0 max-w-md">
          <p className="text-sm mb-4">
            Get industry insights and creative inspiration straight to your inbox.
          </p>
          <div className="border-b border-white/40 pb-2 flex items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent w-full placeholder:text-white/60 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Big Title */}
      <div className="px-6 md:px-20">
        <h1 className="text-[16vw] md:text-[10vw] font-bold text-neutral-200 leading-none text-center">
          Sundown
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 px-10 md:px-20 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-white/70">
        <p>Copyright © Sundown Studio</p>
        <p>Brooklyn, NY</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Instagram
          </a>
          <a href="#" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
