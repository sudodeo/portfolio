type Testimonial = {
  id: string;
  name: string;
  comment: string;
};

export default interface DB {
  name: string;
  about: string[];
  socials: {
    instagram: string;
    twitter: string;
    linkedIn: string;
    discord: string;
  };
  testimonials: Testimonial[];
  yearsOfExperience: number;
}
