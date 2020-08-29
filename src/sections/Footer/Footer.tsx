import React from "react";
import { Social } from "./Social/Social";
import { Mobile } from "./Mobile";
import { Email } from "./Email";
import css from "./Footer.module.sass";
import classNames from "classnames";

export const Footer: React.FC = () => (
  <footer className={css.footer}>
    <div className={css.social}>
      <Social />
    </div>
    <div className={css.mobile}>
      <Mobile />
    </div>
    <div className={css.email}>
      <Email />
    </div>
    <div className={css.policy}>
      <a
        href="/privacy_policy.pdf"
        target="_blank"
        className={classNames(css.footerLink, css.smallLink)}
      >
        Политика конфиденциальности
      </a>
    </div>
  </footer>
);
