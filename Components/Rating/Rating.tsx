import React from "react";
import styles from "./Rating.module.scss";
import cn from "classnames";
import { IRating } from "./Rating.props";

const Paragraph = ({ isEditable = false, rating, setRating, ...props }: IRating): JSX.Element => {
  return <div {...props}></div>;
};

export default Paragraph;
