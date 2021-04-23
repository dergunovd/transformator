import React from "react";

import telegram from "../../../assets/telegram.svg";
import instagram from "../../../assets/instagram.svg";
import vimeo from "../../../assets/vimeo.svg";
import whatsapp from "../../../assets/whatsapp.svg";

import css from "./Social.module.sass";

export const Social = () => (
  <div className={css.social}>
    <a
      className={css.socialLink}
      href="https://t.me/TRSTPROD"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src={telegram} alt="Telegram" />
    </a>
    <a
      className={css.socialLink}
      href="https://instagram.com/transformator"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src={instagram} alt="Instagram" />
    </a>
    <a
      className={css.socialLink}
      href="https://api.whatsapp.com/send?phone=79377785555"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src={whatsapp} alt="WhatsApp" />
    </a>
    <a
      className={css.socialLink}
      href="https://vimeo.com/user117395363"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src={vimeo} alt="Instagram" />
    </a>
  </div>
);
