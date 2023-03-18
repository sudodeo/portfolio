import { v4 as uuidv4 } from "uuid";
import DB from "./db_struct";

//👋 Hi Dee, make changes to the db here
const db: DB = {
  name: "Sudodeo",
  phone: "+2348130000000", // 13 characters after +, spaces are allowed
  email: "sudodeo@gmail.com",
  address: "Lagos, Nigeria",
  about: [
    "I'm Adesola Adeoluwa, a backend developer who is on a mission to bring order to the chaos of the digital world.",
    "I love working on complex projects that require a bit of creativity and a lot of caffeine. When I'm not coding, you can find me enjoying a good cup of coffee (or five) or honing my skills as a mediocre chef.",
    "I'm an expert in web automation, and I'm not afraid to use my powers for good. So let's join forces and create something amazing - the world could use a little more laughter and a lot less error messages.",
  ],
  socials: {
    instagram: "https://www.instagram.com/sudodeo",
    twitter: "https://www.twitter.com/sudodeo",
    linkedIn: "https://www.linkedin.com/in/sudodeo",
    discord: "https://www.discord.com/sudodeo",
    github: "https://www.github.com/sudodeo",
  },
  testimonials: [
    {
      name: "Alex Duboir",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro alias amet perspiciatis neque architecto delectus vel rem repudiandae esse, quas a ducimus? Sunt aspernatur ex autem recusandae nihil voluptates, quis iusto perferendis. Ipsam magnam explicabo, at suscipit porro optio tempora officiis vero blanditiis autem ex voluptas deleniti perspiciatis? Numquam ipsum.",
      business: "Tech tycoon",
    },
    {
      name: "Jane Doe",
      comment:
        "culpa aliquam, sequi dolorem consectetur saepe exercitationem esse, aut maxime fugiat ab molestias. Odit fugit in veniam distinctio, consectetur tempora aspernatur voluptatum dolorum, quasi nulla pariatur porro deleniti, deserunt rem ratione. Ipsum eos optio nam culpa, nesciunt soluta aliquam adipisci repudiandae excepturi quibusdam ex tempore, beatae esse quia illum iure.",
      business: "CEO of something",
    },
    {
      name: "Aliu Sanjoze", // I no know wetin I dey name sha 😂
      comment:
        "cu quasi nulla pariatur porro deleniti, deserunt rem ratione. Ipsum eos optio nam culpa, nesciunt soluta aliquam adipisci repudiandae excepturi quibusdam ex tempore, beatae esse quia illum iure.",
      business: "footballer",
    },
  ],
  yearsOfExperience: 3,
  projects: {
    first_column: [
      {
        title: "social media API",
        description: "A basic social media API built with FastAPI",
        image: "./social.jpg",
        link: "https://github.com/sudodeo/Social-media-API",
        btnMessage: "View on Github",
      },
      {
        title: "gizmo",
        description: "friendly discord bot",
        image: "./gizmo.jpg",
        link: "https://github.com/sudodeo/gizmo",
        btnMessage: "Request demo",
      },
    ],
    second_column: [
      {
        title: "storeX",
        description: "Robust e-commerce Api",
        image: "./storex.jpg",
        link: "https://github.com/sudodeo/storeX",
        btnMessage: "View on Github",
      },
      {
        title: "tech news API",
        description:
          "A scraper that gets trending tech content from different news sites and serves them via an API",
        image: "./technews.jpg",
        link: "https://github.com/sudodeo/tech-news-api",
        btnMessage: "View on Github",
      },
    ],
  },
};

export default db;
