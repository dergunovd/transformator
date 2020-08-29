import React from "react";

import css from "./Team.module.sass";

export const Team: React.FC = () => (
  <section className={css.team}>
    <h2>Команда</h2>
    <h3>
      30 профессионалов с горящими глазами
      <br />и любовью к своему делу
    </h3>
  </section>
);
