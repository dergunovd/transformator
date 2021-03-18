import React from "react";

import css from "./Footer.module.sass";

export const Mobile = () => (
  <a
    className={css.footerLink}
    href="tel:+79377785555"
    rel="noopener noreferrer"
    target="_blank"
  >
    + 7 937 778-55-55
  </a>
);
