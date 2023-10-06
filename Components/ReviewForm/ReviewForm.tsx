import React from "react";
import styles from "./ReviewForm.module.scss";
import cn from "classnames";
import CloseIcon from "./close.svg";
import { ReviewFormProps } from "./ReviewForm.props";
import Input from "../Input/Input";
import Rating from "../Rating/Rating";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";

const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  return (
    <>
      <div className={cn(className, styles.reviewForm)} {...props}>
        <Input className={styles.title} placeholder='Имя' />
        <Input placeholder='Заголовок отзыва' />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={0} />
        </div>
        <TextArea className={styles.description} placeholder='Текст отзыва' />
        <div className={styles.submit}>
          <Button appearance='primary'>Отправить</Button>
          <span className={styles.info}>*Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо! Ваш отзыв будет опубликован после проверки</div>
        <CloseIcon className={styles.close} />
      </div>
    </>
  );
};

export default ReviewForm;
