import React from "react";
import styles from "./ReviewForm.module.scss";
import cn from "classnames";
import { ReviewFormProps } from "./ReviewForm.props";

const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  return <div className={cn(className, styles.reviewForm)} {...props}></div>;
};

export default ReviewForm;
