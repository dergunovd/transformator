import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { Mobile } from "./Mobile/Mobile";
import { Social } from "./Social/Social";

import off from "./assets/off.jpg";
import offMobile from "./assets/off_mob.jpg";
import anim from "./assets/anim.gif";
import animMobile from "./assets/anim_mob.gif";

import css from "./Production.module.sass";

export const Production: React.FC = () => {
  const [shouldAnim, setAnim] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnim(true), 1000);
  }, []);

  return (
    <section className={css.production}>
      <img className={classNames(css.video)} src={off} alt="" />
      {shouldAnim && (
        <img className={classNames(css.video)} src={anim} alt="" />
      )}
      <img className={classNames(css.videoMobile)} src={offMobile} alt="" />
      {shouldAnim && (
        <img className={classNames(css.videoMobile)} src={animMobile} alt="" />
      )}
      <h3 className={css.text}>
        Производство продающей видеорекламы для бизнеса
        от&nbsp;300&nbsp;000&nbsp;рублей
      </h3>
      <Mobile />
      <Social />
    </section>
  );
};
