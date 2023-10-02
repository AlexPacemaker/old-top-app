import React from "react";
import styles from "./Product.module.scss";
import cn from "classnames";
import { ProductProps } from "./Product.props";

const Product = ({ profuct, className, ...props }: ProductProps): JSX.Element => {
  return <div>{profuct.title}</div>;
};

export default Product;
