import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-10 universal">
      <img
        src="./logo.png"
        alt="logo"
        className="w-32 md:w-40 xl:w-48 cursor-pointer select-none"
        role="button"
      />

      <ul className="font-medium hidden lg:flex gap-8 xl:gap-8">
        <li>Home</li>
        <li>Portfolio</li>
        <li>Testimonials</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>

      <button className="hidden lg:block main_btn">Let's Talk</button>
    </nav>
  );
};

export default NavBar;
