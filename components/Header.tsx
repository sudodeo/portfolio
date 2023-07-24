import React from "react";
import Socials from "./Socials";
import db from "../db";
import styles from "../styles/Animations.module.css";
import Image from "next/image";
import Deolu from "../public/deo.png";

const Header = () => {
  return (
    <header className="universal_x relative flex pt-44 ">
      <div className="flex-1 self-center pt-12 pb-48 md:pt-24">
        <h1 className="text-5xl font-bold sm:text-7xl lg:whitespace-nowrap xl:text-8xl">
          I'm <span className="name">Deolu</span> {/* <br /> Adesola */}
        </h1>
        <h3 className="mt-3 mb-10 font-mono text-base md:text-lg lg:text-xl">
          {"{ Backend Developer }"}
        </h3>

        {/* socials */}
        <Socials />
      </div>

      {/* circle */}
      <div className="circle bg-[#56559e]"></div>

      <Image
        src={Deolu}
        alt="Adeoluwa"
        className={`portrait flex-1 ${styles.portrait}`}
        priority
      />

      {/* experience box */}
      <div className="experience right-3 p-3">
        <div className="flex gap-2 border-[3px] border-dashed p-3">
          <span className="text-5xl font-bold">{db?.yearsOfExperience}</span>{" "}
          <span>Years of Experience</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
