import DB from "./db_struct";

//👋 Hi Dee, make changes to the db here
const db: DB = {
  name: "Sudodeo",
  phone: "+2347055192925", // 13 characters after +, spaces are allowed
  email: "sudodeo@gmail.com",
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
    linkedIn: "https://www.linkedin.com/in/adeoluwa-adesola-dev/",
    discord: "https://discord.com/users/741308876204408854",
    github: "https://www.github.com/sudodeo",
  },
  testimonials: [
    {
      name: "Hamud Sadek",
      comment:
        "Working on a development project with Deolu was a pleasure, and I have to say that he is truly exceptional. He is a highly skilled developer with an excellent attention to detail and a solid work ethic. Deolu stands out as the best developer I've ever worked with. In fact, I was so impressed with his work that I appointed him our team's sole developer. I am confident that Deolu will consistently provide me with excellent work in a timely manner, whether I need monitors or assistance with any other type of development work.",
      business: "Satori io",
    },
    {
      name: "Dan Corleone",
      comment:
        "I recently had the opportunity of working with Deolu on a project, and I must say that he was an absolute delight to deal with. Deolu's attention to detail, communication abilities, and ability to complete tasks on schedule were all excellent. His work was of the finest quality and well beyond my expectations.",
      business: "Ticket reseller",
    },
    // {
    //   name: "Aliu Sanjoze", // I no know wetin I dey name sha 😂
    //   comment:
    //     "cu quasi nulla pariatur porro deleniti, deserunt rem ratione. Ipsum eos optio nam culpa, nesciunt soluta aliquam adipisci repudiandae excepturi quibusdam ex tempore, beatae esse quia illum iure.",
    //   business: "footballer",
    // },
  ],
  yearsOfExperience: 3,
  projects: {
    first_column: [
      {
        title: "betterstack-go",
        description: "Golang SDK client for betterstack.com APIs.",
        image: "/sdk.jpeg",
        link: "https://github.com/sudodeo/betterstack-go",
        btnMessage: "View on Github",
      },
      {
        title: "gizmo",
        description: "friendly discord bot",
        image: "/gizmo.jpg",
        link: "https://discord.com/users/741308876204408854",
        btnMessage: "Request demo",
      },
    ],
    second_column: [
      {
        title: "SplitCrew",
        description: "Expense splitting app",
        image: "/expensesplit.jpg",
        link: "https://github.com/sudodeo/splitcrew-API",
        btnMessage: "View on Github",
      },
      {
        title: "TechTimes",
        description:
          "A scraper that gets trending tech content from different news sites and serves them via an API",
        image: "/technews.jpg",
        link: "https://github.com/sudodeo/TechTimes",
        btnMessage: "View on Github",
      },
    ],
  },
  stack: [
    {
      name: "Golang",
      image: "/tools/go.svg",
    },
    {
      name: "Python",
      image: "/tools/python.svg",
    },
    {
      name: "Javascript",
      image: "/tools/javascript.svg",
    },
    {
      name: "Typescript",
      image: "/tools/typescript.svg",
    },
    {
      name: "Node.js",
      image: "/tools/nodejs.svg",
    },
    {
      name: "Express.js",
      image: "/tools/express.svg",
    },
    {
      name: "PostgreSQL",
      image: "/tools/postgresql.svg",
    },
    {
      name: "Mongodb",
      image: "/tools/mongodb.svg",
    },
    {
      name: "Linux",
      image: "/tools/linux.svg",
    },
    {
      name: "Docker",
      image: "/tools/docker.svg",
    },
    {
      name: "Selenium",
      image: "/tools/selenium.svg",
    },
    {
      name: "Playwright",
      image: "/tools/playwright.svg",
    },
    {
      name: "Postman",
      image: "/tools/postman.svg",
    },
    {
      name: "Swagger",
      image: "/tools/swagger.svg",
    },
    {
      name: "Git",
      image: "/tools/git.svg",
    },
    {
      name: "Github",
      image: "/tools/github.svg",
    },
    {
      name: "VSCode",
      image: "/tools/vscode.svg",
    },
    {
      name: "Ubuntu",
      image: "/tools/ubuntu.svg",
    },
  ],
};

export default db;
