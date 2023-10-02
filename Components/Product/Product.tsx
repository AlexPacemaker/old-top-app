import React from "react";
import styles from "./Product.module.scss";
import cn from "classnames";
import { ProductProps } from "./Product.props";

const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
  return <div>{product.title}</div>;
};

export default Product;
