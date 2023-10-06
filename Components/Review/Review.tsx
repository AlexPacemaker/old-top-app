import React from "react";
import styles from "./Review.module.scss";
import cn from "classnames";
import { ReviewProps } from "./Review.props";
import UserIcon from "./user.svg";

const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
  return <div className={cn(styles.review, className)} {...props}></div>;
};

export default Review;
