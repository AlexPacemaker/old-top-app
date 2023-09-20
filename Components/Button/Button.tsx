import React from "react";
import { IButton } from "./Button.props";

const Button = ({ appearence, children }: IButton): JSX.Element => {
  return <button>{children}</button>;
};

export default Button;
