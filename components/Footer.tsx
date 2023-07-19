import React from "react";
import scrollToSection from "./scrollToSection";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div>
      <nav className="universal_x flex flex-col items-center justify-between gap-x-10 gap-y-5 py-10 md:flex-row">
        <a>
          <img
            src="./logo.png"
            alt="logo"
            className="w-32 cursor-pointer select-none md:w-40 xl:w-48"
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
        <small>&copy; 2023. All rights reserved.</small>
      </center>
    </div>
  );
};

export default Footer;
