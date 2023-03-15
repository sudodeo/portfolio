import React from "react";
import db from "../db";

const AboutInfo = () => {
  return (
    <div className="about_tab md:grid items-center pt-10" data-aos="zoom-out">
      <img src="./coder.png" alt="" className="hidden md:block" />

      <div className="font-light space-y-3">
        <h2 className="text-3xl font-bold mb-5">Hello there!</h2>

        {db.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default AboutInfo;
