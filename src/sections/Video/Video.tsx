import React from "react";

import css from "./Video.module.sass";

export const Video: React.FC = () => (
  <section className={css.video}>
    <iframe
      className={css.frame}
      src="https://player.vimeo.com/video/475812857"
      frameBorder="0"
      width="100%"
      height="100%"
      allow="autoplay; fullscreen"
      allowFullScreen
    />
  </section>
);
