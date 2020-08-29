import React from "react";

import css from "./Footer.module.sass";

export const Email = () => (
  <a
    className={css.footerLink}
    href="mailto:info@transformator.media"
    rel="noopener noreferrer"
    target="_blank"
  >
    info@transformator.media
  </a>
);
