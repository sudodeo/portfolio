import React from "react";
import Socials from "./Socials";
import db from "../db";
import styles from "../styles/Animations.module.css";

const Header = () => {
  return (
    <header className="universal_x pt-44 relative flex ">
      <div className="pt-12 md:pt-24 pb-48 self-center flex-1">
        <h1 className="text-5xl sm:text-7xl xl:text-8xl font-bold lg:whitespace-nowrap">
          I'm <span className="name">Deolu</span> {/* <br /> Adesola */}
        </h1>
        <h3 className="mt-3 mb-10 text-base md:text-lg lg:text-xl font-mono">
          {"{ Backend Developer }"}
        </h3>

        {/* socials */}
        <Socials />
      </div>

      {/* circle */}
      <div className="bg-[#56559e] circle"></div>

      <img
        src="./deo.png"
        alt="Adeoluwa"
        className={`portrait flex-1 ${styles.portrait}`}
        loading="eager"
      />

      {/* experience box */}
      <div className="experience p-3 right-3">
        <div className="border-[3px] border-dashed p-3 flex gap-2">
          <span className="font-bold text-5xl">{db?.yearsOfExperience}</span>{" "}
          <span>Years of Experience</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
