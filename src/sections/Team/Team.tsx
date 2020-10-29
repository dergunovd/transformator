import React from "react";

import css from "./Team.module.sass";
import { useViewport } from "react-viewport-hooks";

export const Team: React.FC = () => {
  const { vw } = useViewport();

  return (
    <section className={css.team}>
      <h2>Команда</h2>
      {vw < 640 ? (
        <h3>
          30 профессионалов с горящими глазами и любовью к своему делу, которые
          даже из космоса готовы делать крутые кадры
        </h3>
      ) : (
        <h3>
          30 профессионалов с горящими глазами
          <br />и любовью к своему делу
        </h3>
      )}
    </section>
  );
};
