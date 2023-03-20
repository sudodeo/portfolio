import React from "react";
import db from "../db";

const AboutInfo = () => {
  return (
    <div
      className="about_tab flex flex-col gap-5 md:grid items-center pt-10"
      data-aos="zoom-out"
    >
      <img src="./coder.png" alt="coder" />

      <div className="font-light space-y-3">
        <h2 className="text-3xl font-medium mb-5">Hello there!</h2>

        {db.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default AboutInfo;
