import React from "react";
import css from "./Team.module.sass";
import { Planet } from "./Planet";
import { Services } from "./Services/Services";
import { Reviews } from "./Reviews/Reviews";

export const Team: React.FC = () => (
  <section className={css.team}>
    <h2 className={css.header}>Наша команда</h2>
    <p className={css.text}>
      Мы снимаем контент по всему миру, а если нужно снимем хорошие кадры даже
      из космоса
    </p>
    <Planet />
    <Services />
    <Reviews />
  </section>
);
