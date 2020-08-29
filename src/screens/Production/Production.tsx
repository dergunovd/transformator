import React from "react";

import css from "./Production.module.sass";

export const Production: React.FC = () => (
  <video
    className={css.img}
    src="/assets/production.mp4"
    autoPlay
    preload="auto"
    muted
  />
);
