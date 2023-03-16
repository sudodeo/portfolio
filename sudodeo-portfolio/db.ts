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
  },
  testimonials: [
    {
      id: uuidv4(),
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: uuidv4(),
      name: "Jane Doe",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  yearsOfExperience: 3,
};

export default db;
