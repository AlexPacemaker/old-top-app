import React from "react";
import styles from "./Review.module.scss";
import cn from "classnames";
import { ReviewProps } from "./Review.props";

const Review = ({ className, ...props }: ReviewProps): JSX.Element => {
  return (
    <div className={cn(styles.card, className, styles[color])} {...props}>
      {children}
    </div>
  );
};

export default Review;
