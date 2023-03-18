import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import scrollToSection from "./scrollToSection";

const NavBar = () => {
  // show and hide navbar on scroll up and scroll down respectively
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState<boolean | undefined>(undefined);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    // at top of page pageYOffset is 0
    if (currentScrollPos < 5) setVisible(undefined);
    else setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    // check if user is at top of page
    if (window.pageYOffset < 5) setVisible(undefined);
    else setVisible(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav
      className={`flex justify-between items-center py-5 lg:py-10 universal_x z-50 ${
        visible === undefined ? "nav_transparent" : visible && "nav_visible"
      }`}
      data-aos="fade-in"
      style={{
        // hide navbar on scroll down
        transform: visible != false ? "translateY(0)" : "translateY(-100%)",
        transition: "all 0.3s ease-in-out",
        transitionDelay: visible ? ".5s" : "0s",
        position: visible != undefined ? "fixed" : "absolute",
      }}
    >
      <a>
        <img
          src="./logo.png"
          alt="logo"
          className="w-32 md:w-40 xl:w-48 cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </a>

      <ul className="font-medium hidden md:flex gap-5 lg:gap-8 xl:gap-8">
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

      <div className="hidden md:block">
        <Button
          className="main_btn"
          onClick={(e) => scrollToSection(e, "contact")}
        >
          Let's Talk
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
