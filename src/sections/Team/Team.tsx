import React from "react";

import css from "./Team.module.sass";

export const Team: React.FC = () =>
    (
        <section className={css.team}>
            <h2>География съемок</h2>
            <h3>
                Мы снимаем контент по всему миру, а если нужно,
                сделаем хорошие кадры даже из космоса
            </h3>
        </section>
    );
