import React from "react";

interface ProjectCardProps {
  title: string;
  description?: string;
  image?: string;
  link: string;
  btnMessage: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
  btnMessage,
}) => (
  <article
    data-aos="fade-up"
    className="h-72 md:h-96 lg:h-[30rem] relative project_card"
  >
    <div className="bg_color w-full h-full absolute top-0 left-0 mix-blend-hard-light"></div>

    <img
      src={image}
      alt={image}
      className="w-full h-full object-cover"
      loading="lazy"
    />

    <div className="z-20 mx-5 md:mx-10 my-24 md:my-28 relative">
      <h3 className="text-xl md:text-3xl font-bold first-letter:uppercase drop-shadow-md">
        {title}
      </h3>
      <p className="drop-shadow-lg first-letter:uppercase">{description}</p>

      <a
        href={link}
        className="left-0 -bottom-16 absolute block w-max hover:border-b-2 pb-1 border-white"
        target="_blank"
        rel="noreferrer"
      >
        <div className="bg-white/60 py-2 px-4 font-semibold">{btnMessage}</div>
      </a>
    </div>
  </article>
);

export default ProjectCard;
