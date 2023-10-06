/* eslint-disable react/display-name */
import React, { ForwardedRef } from "react";
import styles from "./TextArea.module.scss";
import cn from "classnames";
import { TextAreaProps } from "./TextArea.props";

const TextArea = React.forwardRef(
  ({ className, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return <textarea className={cn(className, styles.textarea)} ref={ref} {...props} />;
  }
);

export default TextArea;
