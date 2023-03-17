type Testimonial = {
  id: string;
  name: string;
  comment: string;
};

type Project = {
  title: string;
  description?: string;
  image?: string;
};

export default interface DB {
  name: string;
  phone: string;
  email: string;
  address: string;
  about: string[];
  socials: {
    instagram: string;
    twitter: string;
    linkedIn: string;
    discord: string;
  };
  testimonials: Testimonial[];
  yearsOfExperience: number;
  projects: {
    first_column: Project[];
    second_column: Project[];
  };
}
