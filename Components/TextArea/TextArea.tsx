import React from "react";
import styles from "./TextArea.module.scss";
import cn from "classnames";
import { TextAreaProps } from "./TextArea.props";

const TextArea = ({ className, ...props }: TextAreaProps): JSX.Element => {
  return <textarea className={cn(className, styles.input)} {...props} />;
};

export default TextArea;
