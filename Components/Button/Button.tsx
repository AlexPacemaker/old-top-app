import React from "react";
import styles from "./Button.module.scss";
import cn from "classnames";
import { ButtonProps } from "./Button.props";

const Button = ({ appearence, children, className }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearence == "primary",
        [styles.ghost]: appearence == "ghost",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
