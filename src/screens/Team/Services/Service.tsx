import React, { useContext } from "react";

import css from "./Service.module.sass";
import { PopupContext } from "../../../context/popup.context";

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
}) => {
  const { setOpen } = useContext(PopupContext);

  return (
    <div className={css.service}>
      <h3 className={css.header}>{title}</h3>
      <h4 className={css.price}>{price}</h4>
      <p className={css.description}>{children}</p>
      <div>
        {button}&nbsp;
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={css.download} onClick={() => setOpen(true)}>
          Скачать презентацию
        </a>
      </div>
    </div>
  );
};
