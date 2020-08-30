import React from "react";

import css from "./Review.module.sass";

export interface ReviewProps {
  title: string;
  subtitle: string;
  image: string;
}

export const Review: React.FC<ReviewProps> = ({
  title,
  subtitle,
  image,
  children,
}) => (
  <div className={css.review}>
    <h3 className={css.header}>{title}</h3>
    <h4 className={css.subtitle}>{subtitle}</h4>
    <p className={css.description}>{children}</p>
    <img src={image} alt="" className={css.image} />
  </div>
);
