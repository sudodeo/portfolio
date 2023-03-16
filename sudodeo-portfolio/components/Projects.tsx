import React from "react";

const Projects = () => {
  return (
    <section
      className="universal_x universal_y grid sm:grid-cols-2 gap-[2px]"
      id="projects"
    >
      <div className="space-y-[2px]">
        <div className="mb-16">
          <h2 className="title !mb-3">Projects</h2>
          <em>At least a few...</em>
        </div>

        <article
          data-aos="fade-up"
          className="bg-teal-300 h-72 md:h-96 lg:h-[30rem]"
        ></article>
        <article
          data-aos="fade-up"
          className="bg-cyan-300 h-72 md:h-96 lg:h-[30rem]"
        ></article>
      </div>

      <div className="space-y-[2px]">
        <article
          data-aos="fade-up"
          className="bg-orange-300 h-72 md:h-96 lg:h-[30rem]"
        ></article>
        <article
          data-aos="fade-up"
          className="bg-red-300 h-72 md:h-96 lg:h-[30rem]"
        ></article>
      </div>
    </section>
  );
};

export default Projects;
