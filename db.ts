import DB from "./db_struct";

//👋 Hi Dee, make changes to the db here
const db: DB = {
  name: "Sudodeo",
  phone: "+2348130000000", // 13 characters after +, spaces are allowed
  email: "adesolaadeoluwa@gmail.com",
  address: "Lagos, Nigeria",
  about: [
    "I'm Adeoluwa Adesola, a backend developer who is on a mission to make life easier - one line of code at a time.",
    "When I'm not busy coding, you can find me either watching football, listening to music, or playing video games. I mean, a developer's gotta have some downtime, right? But don't worry, I'm always eager to learn new things and stay up-to-date with the latest tech trends.",
    "I'm an expert in web automation, and I'm not afraid to use my powers for good. So let's join forces and create something amazing - the world could use a little more laughter and a lot less error messages.",
  ],
  skills: [
    {
      title: "backend development",
      description:
        "I build robust APIs that are scalable and easy to maintain.",
    },
    {
      title: "web automation",
      description: "I build bots that automate repetitive tasks on the web.",
    },
    {
      title: "web scraping",
      description: "I build bots that scrape data from websites.",
    },
  ],
  socials: {
    instagram: "https://www.instagram.com/_.deolu",
    twitter: "https://www.twitter.com/deolu_ad",
    linkedIn: "https://www.linkedin.com/in/adeoluwa-adesola-dev/",
    discord: "https://discordapp.com/741308876204408854",
    github: "https://www.github.com/sudodeo",
  },
  testimonials: [
    {
      name: "Hamud Sadek",
      comment:
        "I had the pleasure of working with Deolu on a development project and I have to say that he is truly exceptional. He is an incredibly talented developer with a keen eye for detail and a strong work ethic. Out of all the developers I have worked with, Deolu stands out as the best. In fact, I was so impressed with his work that I made him the dedicated developer for our group. I know that whenever I need monitors or any other development work done, I can count on Deolu to deliver exceptional results in a timely manner. Thank you Deolu for your hard work and dedication, you truly are the best.",
      business: "Satori io",
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
        image: "./storeX.jpg",
        link: "https://github.com/sudodeo/storeX",
        btnMessage: "View on Github",
      },
      {
        title: "TechTimes",
        description:
          "A scraper that gets trending tech content from different news sites and serves them via an API",
        image: "./technews.jpg",
        link: "https://github.com/sudodeo/TechTimes",
        btnMessage: "View on Github",
      },
    ],
  },
};

export default db;
