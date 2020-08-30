import React, { useRef } from "react";

import css from "./Production.module.sass";

export const Production: React.FC = () => {
  const video = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={video}
      className={css.img}
      onCanPlay={() => {
        setTimeout(() => {
          video.current?.play();
        }, 3000);
      }}
      src="/assets/production.mp4"
      preload="auto"
      muted
    />
  );
};
