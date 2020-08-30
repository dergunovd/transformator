import React from "react";
import classnames from "classnames";

import css from "./Button.module.sass";

export const Button: React.FC<React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>> = ({ children, ...props }) => (
  <button {...props} className={classnames([css.button, props.className])}>
    {children}
  </button>
);
