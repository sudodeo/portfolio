import React from "react";

interface ProjectCardProps {
  title: string;
  description?: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
}) => (
  <article
    data-aos="fade-up"
    className="h-72 md:h-96 lg:h-[30rem] relative project_card"
  >
    <div className="bg_color w-full h-full absolute top-0 left-0 mix-blend-hard-light"></div>

    <img
      src={image}
      alt=""
      className="w-full h-full object-cover"
      loading="lazy"
    />

    <div className="z-20 m-5 md:m-10">
      <h3 className="text-xl md:text-3xl font-bold first-letter:uppercase drop-shadow-md">
        {title}
      </h3>
      <p className="drop-shadow-lg first-letter:uppercase">{description}</p>
    </div>
  </article>
);

export default ProjectCard;
