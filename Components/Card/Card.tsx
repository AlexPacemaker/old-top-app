import React from "react";
import styles from "./Card.module.scss";
import cn from "classnames";
import { CardProps } from "./Card.props";

const Card = ({ className, children, color='white', ...props }: CardProps): JSX.Element => {
  return (
    <div className={cn(styles.card, className, styles[color])} {...props}>
      {children}
    </div>
  );
};

export default Card;
