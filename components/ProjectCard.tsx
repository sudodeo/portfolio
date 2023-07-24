import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  title: string;
  description?: string;
  image: string;
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
    className="project_card relative h-72 md:h-96 lg:h-[30rem]"
  >
    <div className="bg_color absolute top-0 left-0 h-full w-full mix-blend-hard-light"></div>

    <Image
      src={image}
      alt={image}
      width={1000}
      height={1000}
      className="h-full w-full object-cover"
      loading="lazy"
    />

    <div className="relative z-20 mx-5 my-24 md:mx-10 md:my-28">
      <h3 className="text-xl font-bold drop-shadow-md first-letter:uppercase md:text-3xl">
        {title}
      </h3>
      <p className="drop-shadow-lg first-letter:uppercase">{description}</p>

      <a
        href={link}
        className="absolute left-0 -bottom-16 block w-max border-white pb-1 hover:border-b-2"
        target="_blank"
        rel="noreferrer"
      >
        <div className="bg-white/60 py-2 px-4 font-semibold">{btnMessage}</div>
      </a>
    </div>
  </article>
);

export default ProjectCard;
