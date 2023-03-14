import React from "react";

const NavBar = () => {
  return (
    <nav
      className="flex justify-between items-center py-10 universal"
      data-aos="fade-in"
    >
      <button className="logo">
        <img
          src="./logo.png"
          alt="logo"
          className="w-32 md:w-40 xl:w-48 cursor-pointer select-none"
        />
      </button>

      <ul className="font-medium hidden lg:flex gap-8 xl:gap-8">
        <li>
          <a href=""> Home</a>
        </li>
        <li>
          <a href=""> Portfolio</a>
        </li>
        <li>
          <a href=""> Testimonials</a>
        </li>
        <li>
          <a href=""> Project</a>
        </li>
        <li>
          <a href=""> Contact</a>
        </li>
      </ul>

      <button className="hidden lg:block main_btn">Let's Talk</button>
    </nav>
  );
};

export default NavBar;
