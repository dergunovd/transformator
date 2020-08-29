import React, { useCallback, useEffect, useState } from "react";
import css from "./Item.module.sass";

export interface ItemProps {
  srcOn: string;
  srcOff: string;
  alt: string;
  isActiveDefault?: boolean;
  link: string;
}

export const Item: React.FC<ItemProps> = ({
  srcOn,
  srcOff,
  alt,
  isActiveDefault,
  link,
}) => {
  const [isActive, setActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  );
  const resizeHandler = useCallback(() => {
    setWindowWidth(
      Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      )
    );
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler, true);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [resizeHandler]);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        className={css.item}
        src={isActive || isActiveDefault || windowWidth < 640 ? srcOn : srcOff}
        alt={alt}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      />
    </a>
  );
};
