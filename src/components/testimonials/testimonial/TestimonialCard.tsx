import { Testimonial } from "../../../services/testimonials";
//@ts-ignore
import * as styles from "./TestimonialCard.module.scss";
import React from "react";

const TestimonialCard = ({ title, description }: Testimonial) => {
  return (
    <div className={styles.testimonial}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TestimonialCard;
