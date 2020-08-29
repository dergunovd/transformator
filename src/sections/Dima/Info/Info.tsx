import React, { useState } from "react";
// @ts-ignore
import { Fade } from "react-reveal";

import infoIcon from "../assets/info.png";
import css from "./Info.module.sass";

export const Info: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div
      className={css.info}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <img src={infoIcon} alt="i" />
      <Fade when={isVisible}>
        <ul className={css.list}>
          <li>Основатель «Transformator Production».</li>
          <li>
            Основатель бизнес-блога «Трансформатор»
            (1&nbsp;560&nbsp;000&nbsp;подписчиков).
          </li>
          <li>
            Основатель агентства эксклюзивных путешествий «Transformator
            Travel».
          </li>
          <li>
            Основатель премиального закрытого клуба предпринимателей «Club 500»
          </li>
        </ul>
      </Fade>
    </div>
  );
};
