import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

interface SingleTestimonialProps {
  name: string;
  comment: string;
  business: string;
}

const SingleTestimonial: React.FC<SingleTestimonialProps> = ({
  name,
  comment,
  business,
}) => {
  return (
    <article className="px-8 lg:px-16 py-5 sm:py-10">
      <FormatQuoteIcon />

      <div className="mt-5">
        <p data-aos="fade-left">{comment}</p>

        <h4 className="mt-5 sm:mt-10 font-semibold text-[var(--orange-primary)] capitalize">
          {name}
        </h4>
        <small className="text-[var(--gray-primary)] tracking-wider capitalize">
          {business}
        </small>
      </div>
    </article>
  );
};

export default SingleTestimonial;
