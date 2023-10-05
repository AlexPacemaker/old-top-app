import React from "react";
import styles from "./Divider.module.scss";
import cn from "classnames";
import { DividerProps } from "./Divider.props";

const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
  return <hr className={cn(className, styles.hr)} {...props} />;
};

export default Divider;
