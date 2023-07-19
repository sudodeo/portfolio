import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import scrollToSection from "./scrollToSection";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import Socials from "./Socials";

const NavBar = () => {
  // show and hide navbar on scroll up and scroll down respectively
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState<boolean | undefined>(undefined);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // if menuOpen, disable scroll
  useEffect(() => {
    // if menuOpen and window width is less than 768px, disable scroll
    if (menuOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen, window.innerWidth]);

  const closeNav = (e: any, section: string) => {
    // if any of the link is clicked, close the nav
    scrollToSection(e, section);
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <nav
      className={`z-50 py-5 lg:py-10 ${
        visible === undefined
          ? "nav_transparent"
          : (visible || menuOpen) && "nav_visible"
      }`}
      style={{
        // hide navbar on scroll down
        transform:
          visible != false || menuOpen ? "translateY(0)" : "translateY(-100%)",
        transition: "all 0.3s ease-in-out",
        transitionDelay: visible ? ".5s" : "0s",
        position: visible != undefined ? "fixed" : "absolute",
      }}
    >
      <div
        className="universal_x flex items-center
justify-between"
      >
        <a>
          <img
            src="./logo.png"
            alt="logo"
            className="w-32 cursor-pointer select-none md:w-40 xl:w-48"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              if (menuOpen) setMenuOpen(false);
            }}
          />
        </a>

        <ul className="hidden gap-5 font-medium md:flex lg:gap-8 xl:gap-8">
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

        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MenuOpenOutlinedIcon /> : <MenuOutlinedIcon />}
        </div>

        <aside
          className={`fixed top-[4.3rem] left-0 z-40 h-screen w-full overflow-hidden md:hidden ${
            menuOpen && "show"
          }`}
        >
          <ul className="flex flex-col items-center justify-center gap-8 py-12 font-medium">
            <li>
              <a href="" onClick={(e) => closeNav(e, "about")}>
                About
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => closeNav(e, "projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => closeNav(e, "testimonial")}>
                Testimonial
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => closeNav(e, "contact")}>
                Contact
              </a>
            </li>
          </ul>

          <div className=" mt-12 flex justify-center">
            <Socials />
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default NavBar;
