import React from "react";
import classnames from "classnames";

import css from "./Button.module.sass";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  secondary?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  secondary,
  ...props
}) => (
  <button
    {...props}
    className={classnames([
      css.button,
      props.className,
      { [css.secondary]: secondary },
    ])}
  >
    {children}
  </button>
);
