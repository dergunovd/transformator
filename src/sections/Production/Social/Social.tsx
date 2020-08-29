import React, { useEffect, useState } from "react";
import classNames from "classnames";

import instagram from "../../../assets/instagram.png";
import vimeo from "../../../assets/vimeo.png";
import whatsapp from "../../../assets/whatsapp.png";

import css from "./Social.module.sass";

export const Social = () => {
  const [isHidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 3000);
  }, []);

  return (
    <>
      <div className={css.social}>
        <a
          className={classNames(css.socialLink, { [css.hidden]: isHidden })}
          href="https://instagram.com/transformator"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={instagram} alt="Instagram" />
        </a>
        <a
          className={classNames(css.socialLink, { [css.hidden]: isHidden })}
          href="https://wa.me/79198392634"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>
        <a
          className={classNames(css.socialLink, { [css.hidden]: isHidden })}
          href="https://vimeo.com/user117395363"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={vimeo} alt="Instagram" />
        </a>
      </div>
    </>
  );
};
