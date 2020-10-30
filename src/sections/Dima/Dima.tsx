import React from "react";

import { Info } from "./Info/Info";

import dima from "./assets/dima.png";
import sign from "./assets/sign.png";
import css from "./Dima.module.sass";

export const Dima: React.FC = () => (
  <section className={css.dima}>
    <img src={dima} alt="" className={css.dimaImg} />
    <Info />
    <div className={css.content}>
      <div className={css.text}>
        Привет!
        <br />
        <br />
        Меня зовут Дмитрий Портнягин. Я основатель рекламного агентства
        «Transformator Production».
        <br />
        <br />
        Мы с командой создали 200+ видео и фильмов о средних и крупных бизнесах.
        Мы знаем, как правильно преподнести любой продукт потенциальному
        клиенту.
        <br />
        <br />
        Если вы хотите лучшую видеорекламу на своем рынке, то давайте работать.
      </div>
      <a
        className={css.instagram}
        target="_blank"
        rel="noopener noreferrer"
        href="//instagram.com/portnyagin"
      >
        @portnyagin
      </a>
      <div className={css.sign}>
        <img src={sign} />
      </div>
    </div>
  </section>
);
