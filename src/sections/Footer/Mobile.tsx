import React from "react";

import css from "./Footer.module.sass";

export const Mobile = () => (
  <a
    className={css.footerLink}
    href="tel:+79255556767"
    rel="noopener noreferrer"
    target="_blank"
  >
    + 7 925 555-67-67
  </a>
);
