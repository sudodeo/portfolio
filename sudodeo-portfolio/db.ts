import { v4 as uuidv4 } from "uuid";

interface DB {
  name: string;
  description: string;
  socials: {
    instagram: string;
    twitter: string;
    linkedIn: string;
    discord: string;
  };
  testimonials: object[];
  yearsOfExperience: number;
}

const db: DB = {
  name: "Sudodeo",
  description: "Adeoluwa Adesola's Portfolio",
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
  yearsOfExperience: 2,
};

export default db;
