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
    <article className="px-8 py-5 sm:py-10 lg:px-16">
      <FormatQuoteIcon />

      <div className="mt-5">
        <p data-aos="fade-left">{comment}</p>

        <h4 className="mt-5 font-semibold capitalize text-[var(--orange-primary)] sm:mt-10">
          {name}
        </h4>
        <small className="capitalize tracking-wider text-[var(--gray-primary)]">
          {business}
        </small>
      </div>
    </article>
  );
};

export default SingleTestimonial;
