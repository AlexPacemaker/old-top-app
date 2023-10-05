import React from "react";
import styles from "./Product.module.scss";
import cn from "classnames";
import { ProductProps } from "./Product.props";
import Card from "../Card/Card";

const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
  return (
    <Card>
      <div className={styles.logo}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.title}>{product.title}</div>
    </Card>
  );
};

export default Product;
