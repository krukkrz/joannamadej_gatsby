import { getTestimonials } from "../../services/testimonials";
import TestimonialCard from "./testimonial/TestimonialCard";
//@ts-ignore
import * as styles from "./Testimonials.module.scss";
import React from "react";

const Testimonials = () => {
  const testimonials = getTestimonials();
  return (
    <div id="testimonials">
      <h1>Testimonials</h1>
      <div className={styles.testimonials}>
        <div className={styles.testimonials_col1}>
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[2]} />
        </div>
        <div className={styles.testimonials_col2}>
          <TestimonialCard {...testimonials[1]} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
