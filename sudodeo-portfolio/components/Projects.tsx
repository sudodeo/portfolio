import React from "react";
import ProjectCard from "./ProjectCard";
import db from "../db";
import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  return (
    <section
      className="projects universal_x universal_y grid sm:grid-cols-2 gap-[3px]"
      id="projects"
    >
      <div className="space-y-[3px]">
        <div className="mb-16">
          <h2 className="title !mb-3">Projects</h2>
          <em>At least a few...</em>
        </div>

        {
          // @ts-ignore
          db.projects.first_column.map((item) => (
            <ProjectCard {...item} key={uuidv4()} />
          ))
        }
      </div>

      <div className="space-y-[3px]">
        {
          // @ts-ignore
          db.projects.second_column.map((item) => (
            <ProjectCard {...item} key={uuidv4()} />
          ))
        }
      </div>
    </section>
  );
};

export default Projects;
