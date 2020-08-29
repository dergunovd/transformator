import React, { useState } from "react";
import css from "./Item.module.sass";

export interface ItemProps {
  srcOn: string;
  srcOff: string;
  alt: string;
}

export const Item: React.FC<ItemProps> = ({ srcOn, srcOff, alt }) => {
  const [isActive, setActive] = useState(false);

  return (
    <div>
      <img
        className={css.item}
        src={isActive ? srcOn : srcOff}
        alt={alt}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      />
    </div>
  );
};
