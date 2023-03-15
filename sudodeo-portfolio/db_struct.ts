type Testimonial = {
  id: string;
  name: string;
  comment: string;
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
}
