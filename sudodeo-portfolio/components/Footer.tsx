import React from "react";
import scrollToSection from "./scrollToSection";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div>
      <nav className="universal_x py-10 flex flex-col md:flex-row gap-x-10 gap-y-5 items-center justify-between">
        <a>
          <img
            src="./logo.png"
            alt="logo"
            className="w-32 md:w-40 xl:w-48 cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </a>

        <ul className="flex gap-5 lg:gap-8 xl:gap-8">
          <li>
            <a href="" onClick={(e) => scrollToSection(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="" onClick={(e) => scrollToSection(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="" onClick={(e) => scrollToSection(e, "testimonial")}>
              Testimonial
            </a>
          </li>
          <li>
            <a href="" onClick={(e) => scrollToSection(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>

        <Socials />
      </nav>

      <center className="second_bg py-5">
        &copy; 2023. All rights reserved.
      </center>
    </div>
  );
};

export default Footer;
