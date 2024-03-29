import React from "react";
import db from "../db";

const Socials = () => {
  return (
    <div className="socials flex gap-4">
      {/* discord */}
      <a href={db!.socials!.discord} target="_blank" rel="noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968756.png"
          alt="instagram"
          className="h-5 w-5 md:h-7 md:w-7"
        />
      </a>

      {/* twitter */}
      {/* <a href={db!.socials!.twitter} target="_blank" rel="noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
          alt="instagram"
          className="h-5 w-5 md:h-7 md:w-7"
        />
      </a> */}

      {/* linkedIn */}
      <a href={db!.socials!.linkedIn} target="_blank" rel="noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
          alt="instagram"
          className="h-5 w-5 md:h-7 md:w-7"
        />
      </a>

      {/* instagram */}
      {/* <a href={db!.socials!.instagram} target="_blank" rel="noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png"
          alt="instagram"
          className="h-5 w-5 md:h-7 md:w-7"
        />
      </a> */}

      {/* github */}
      <a href={db!.socials!.github} target="_blank" rel="noreferrer">
        <img
          src="https://cdn-icons-png.flaticon.com/128/733/733553.png"
          alt="instagram"
          className="h-5 w-5 md:h-7 md:w-7"
        />
      </a>
    </div>
  );
};

export default Socials;
