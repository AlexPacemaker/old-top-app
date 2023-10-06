/* eslint-disable react/display-name */
import React, { ForwardedRef } from "react";
import styles from "./Input.module.scss";
import cn from "classnames";
import { InputProps } from "./Input.props";

const Input = React.forwardRef(
  ({ className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return <input className={cn(className, styles.input)} ref={ref} {...props} />;
  }
);

export default Input;
