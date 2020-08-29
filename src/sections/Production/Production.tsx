import React from "react";

import { Mobile } from "./Mobile/Mobile";
import { Social } from "./Social/Social";

import gif from "./assets/gif.gif";
import gifMobile from "./assets/gif_mobile.gif";
import css from "./Production.module.sass";

export const Production: React.FC = () => (
  <section className={css.production}>
    <img className={css.video} src={gif} alt="" />
    <img className={css.videoMobile} src={gifMobile} alt="" />
    <h3 className={css.text}>
      Производство продающей видеорекламы для бизнеса
      от&nbsp;300&nbsp;000&nbsp;рублей
    </h3>
    <Mobile />
    <Social />
  </section>
);
