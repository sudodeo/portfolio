import React from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsFields {
  first_column: {
    title: string;
    description?: string;
    image?: string;
  }[];
  second_column: {
    title: string;
    description?: string;
    image?: string;
  }[];
}

const projects: ProjectsFields = {
  first_column: [
    {
      title: "social media API",
      description: "A basic social media API built with FastAPI",
      image: "./social.jpg",
    },
    {
      title: "gizmo",
      description: "friendly discord bot",
      image: "./gizmo.jpg",
    },
  ],
  second_column: [
    {
      title: "storeX",
      description: "Robust e-commerce Api",
      image: "./storex.jpg",
    },
    {
      title: "tech news API",
      description:
        "A scraper that gets trending tech content from different news sites and serves them via an API",
      image: "./technews.jpg",
    },
  ],
};

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
          projects.first_column.map((item) => (
            <ProjectCard {...item} />
          ))
        }
      </div>

      <div className="space-y-[3px]">
        {
          // @ts-ignore
          projects.second_column.map((item) => (
            <ProjectCard {...item} />
          ))
        }
      </div>
    </section>
  );
};

export default Projects;
