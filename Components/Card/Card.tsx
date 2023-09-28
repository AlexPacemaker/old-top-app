import React from "react";
import styles from "./Paragraph.module.scss";
import cn from "classnames";
import { IParagraphProps } from "./Card.props";

const Paragraph = ({ size, children, className, ...props }: IParagraphProps): JSX.Element => {
  return (
    <p className={cn(styles.Paragraph, className, styles[size])} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
