import React from "react";
import css from "./Service.module.sass";

export interface ReviewProps {
  title: string;
  price: string;
  description: string;
  image: React.ReactNode;
  button: React.ReactNode;
}

export const Service: React.FC<ReviewProps> = ({
  title,
  price,
  description,
  image,
  button,
}) => (
  <div className={css.service}>
    <div className={css.content}>
      <h4 className={css.header}>{title}</h4>
      <h5 className={css.price}>{price}</h5>
      <p className={css.description}>{description}</p>
      <div className={css.buttons}>{button}</div>
    </div>
    <div className={css.image}>{image}</div>
  </div>
);
