import { IRating } from "./Rating.props";
import styles from "./Rating.module.scss";
import cn from "classnames";
import StarIcon from "./star.svg";
import { useEffect, useState, KeyboardEvent } from "react";

const Rating = ({ isEditable = false, rating, setRating, ...props }: IRating): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
    //eslint-disable-next-line
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span key={i}>
          <StarIcon
            className={cn(styles.star, {
              [styles.filled]: i < currentRating,
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
