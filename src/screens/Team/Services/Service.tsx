import React from "react";

import css from "./Service.module.sass";

export interface ReviewProps {
  title: string;
  price: string;
  button: React.ReactNode;
}

export const Service: React.FC<ReviewProps> = ({
  title,
  price,
  button,
  children,
}) => (
  <div className={css.service}>
    <h3 className={css.header}>{title}</h3>
    <h4 className={css.price}>{price}</h4>
    <p className={css.description}>{children}</p>
    <div>
      {button}&nbsp;
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="" className={css.download}>
        Скачать презентацию
      </a>
    </div>
  </div>
);
