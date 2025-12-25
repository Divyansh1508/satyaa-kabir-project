import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav className="bg-white border-b px-4 py-3 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex gap-4 md:gap-6 justify-center text-sm font-medium  whitespace-nowrap">
          <a href="#" className="hover:text-pink-500 transition-colors ">
            Home
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors ">
            about
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors ">
            course
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors ">
            destination
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors ">
            packages
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors ">
            contact-us
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors ">
            gallery
          </a>
          <a href="#" className="hover:text-pink-500 transition-colors ">
            blog
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
