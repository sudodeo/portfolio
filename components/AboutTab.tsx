import React from "react";
import db from "../db";
import Image from "next/image";
import AboutImage from "../public/coder.png";

const AboutInfo = () => {
  return (
    <div
      className="about_tab flex flex-col items-center gap-5 pt-10 md:grid"
      data-aos="zoom-out"
    >
      <Image src={AboutImage} alt="coder" />

      <div className="space-y-3 font-light">
        <h2 className="mb-5 text-3xl font-medium">Hello there!</h2>

        {db.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default AboutInfo;
