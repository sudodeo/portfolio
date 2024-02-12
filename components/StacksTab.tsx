import React from "react";
import db from "../db";

const CenteredFlexColumn = ({ children }: { children: React.ReactNode }) => (
  <div className="relative flex cursor-pointer flex-col items-start items-center justify-start gap-2 px-1 py-2 text-center hover:opacity-75">
    {children}
  </div>
);

type Tool = {
  name: string;
  image: string;
};

const Stacks = () => {
  const stacks: Tool[] = db.stack;

  return (
    <div className="pt-10" data-aos="zoom-out">
      <div className="stacks-container flex flex-wrap items-start gap-12">
        {stacks.map((tool, index) => (
          <CenteredFlexColumn key={index}>
            <img
              src={tool.image}
              alt={tool.name}
              style={{ width: 60, height: 60 }}
            />
            <p>{tool.name}</p>
          </CenteredFlexColumn>
        ))}
      </div>
    </div>
  );
};

export default Stacks;
