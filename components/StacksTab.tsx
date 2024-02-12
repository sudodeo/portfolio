import React from "react";
import {
  FaGolang,
  FaNodeJs,
  FaJs,
  FaDocker,
  FaGithub,
  FaGitAlt,
  FaPython,
} from "react-icons/fa6";

import {
  SiPostman,
  SiExpress,
  SiSelenium,
  SiPlaywright,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

const CenteredFlexColumn = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center text-center">{children}</div>
);

const Stacks = () => {
  return (
    <div className="pt-10" data-aos="zoom-out">
      <div className="stacks-container flex flex-wrap items-center gap-12">
        <CenteredFlexColumn>
          <FaJs size={60} />
          <p>JavaScript</p>
        </CenteredFlexColumn>

        <CenteredFlexColumn>
          <SiTypescript size={60} />
          <p>Typescript</p>
        </CenteredFlexColumn>

        <CenteredFlexColumn>
          <FaPython size={60} />
          <p>Python</p>
        </CenteredFlexColumn>

        <CenteredFlexColumn>
          <FaGolang size={60} />
          <p>Golang</p>
        </CenteredFlexColumn>

        <CenteredFlexColumn>
          <FaNodeJs size={60} />
          <p>Node.js</p>
        </CenteredFlexColumn>

        <CenteredFlexColumn>
          <SiExpress size={60} />
          <p>Express.js</p>
        </CenteredFlexColumn>

        <CenteredFlexColumn>
          <SiPostgresql size={60} />
          <p>PostgreSQL</p>
        </CenteredFlexColumn>

        <CenteredFlexColumn>
          <SiMongodb size={60} />
          <p>MongoDB</p>
        </CenteredFlexColumn>
        
        <CenteredFlexColumn>
          <FaDocker size={60} />
          <p>Docker</p>
        </CenteredFlexColumn>

        <CenteredFlexColumn>
          <SiSelenium size={60} />
          <p>Selenium</p>
        </CenteredFlexColumn>

        <CenteredFlexColumn>
          <SiPlaywright size={60} />
          <p>Playwright</p>
        </CenteredFlexColumn>

        <CenteredFlexColumn>
          <SiPostman size={60} />
          <p>Postman</p>
        </CenteredFlexColumn>

        <CenteredFlexColumn>
          <FaGithub size={60} />
          <p>GitHub</p>
        </CenteredFlexColumn>

        <CenteredFlexColumn>
          <FaGitAlt size={60} />
          <p>Git</p>
        </CenteredFlexColumn>
      </div>
    </div>
  );
};

export default Stacks;
