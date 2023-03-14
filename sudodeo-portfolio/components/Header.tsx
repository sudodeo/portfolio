import React from "react";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="universal relative flex">
      <div className="pt-24 pb-48 self-center flex-1" data-aos="fade-in">
        <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold md:whitespace-nowrap">
          I'm{" "}
          <span className="name">
            A<mark>deo</mark>luwa
          </span>{" "}
          <br /> Adesola
        </h1>
        <h3 className="mt-3 text-base md:text-xl font-mono">
          {"{ Backend Developer }"}
        </h3>

        {/* socials */}
        <Socials />
      </div>

      {/* circle */}
      <div className="bg-[#43427b] circle"></div>

      <img
        src="./deo.png"
        alt="Adeoluwa"
        className="deolu flex-1"
        data-aos="fade-up"
      />

      {/* experience box */}
      <div className="experience p-3 right-3" data-aos="fade-left">
        <div className="border-[2px] border-dashed p-3 flex gap-2">
          <span className="font-bold text-5xl">2</span>{" "}
          <span>Years of Experience</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
