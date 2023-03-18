import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { v4 as uuidv4 } from "uuid";
import SingleTestimonial from "./SingleTestimonial";
import db from "../db";

const Testimonials = () => {
  // current testimonial
  const [testimonial, setTestimonial] = React.useState(0);

  // switch testimonial
  const switchTestimonial = (direction: string) => {
    if (direction === "next") {
      if (testimonial === db.testimonials.length - 1) {
        setTestimonial(0);
      } else {
        setTestimonial(testimonial + 1);
      }
    } else if (direction === "prev") {
      if (testimonial === 0) {
        setTestimonial(db.testimonials.length - 1);
      } else {
        setTestimonial(testimonial - 1);
      }
    }
  };

  return (
    <div
      className="second_bg testimonials pl-6 md:pl-12 lg:pl-32 xl:pl-56 py-12 md:py-20"
      id="testimonial"
    >
      <h2 className="title">Testimonial</h2>

      <div className="min-h-[320px] bg-[#211f6396] border-b-[3px] border-t-[3px] border-[#332f80] sm:grid md:pr-12 lg:pr-32 xl:pr-56">
        {db.testimonials.map((singleTestimonial, i) => {
          if (testimonial === i) {
            return <SingleTestimonial key={uuidv4()} {...singleTestimonial} />;
          }
        })}

        <div className="button_navigation p-3">
          <button
            className="group sm:order-2"
            onClick={() => switchTestimonial("prev")}
          >
            <div className="group-hover:bg-[#5261e7] p-[10px] rounded-full transition">
              <ArrowBackIosNewIcon />
            </div>
          </button>

          <button className="group" onClick={() => switchTestimonial("next")}>
            <div className="group-hover:bg-[#5261e7] p-[10px] rounded-full transition">
              <ArrowForwardIosIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
