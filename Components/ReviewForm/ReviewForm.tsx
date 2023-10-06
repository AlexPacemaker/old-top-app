import React from "react";
import { useForm, Controller } from "react-hook-form";
import cn from "classnames";
import { ReviewFormProps } from "./ReviewForm.props";
import { IReviewForm } from "./ReviewForm.interface";
import styles from "./ReviewForm.module.scss";
import CloseIcon from "./close.svg";
import Input from "../Input/Input";
import Rating from "../Rating/Rating";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";

const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(className, styles.reviewForm)} {...props}>
        <Input {...register("name")} className={styles.title} placeholder='Имя' />
        <Input {...register("title")} placeholder='Заголовок отзыва' />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name='rating'
            render={({ field }) => {
              return <Rating isEditable rating={field.value} ref={field.ref} setRating={field.onChange} />;
            }}
          />
        </div>
        <TextArea {...register("description")} className={styles.description} placeholder='Текст отзыва' />
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
    </form>
  );
};

export default ReviewForm;
