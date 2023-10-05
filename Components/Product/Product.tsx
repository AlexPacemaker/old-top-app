import React from "react";
import styles from "./Product.module.scss";
import cn from "classnames";
import { ProductProps } from "./Product.props";
import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import { priceRu } from "@/helpers/helpers";

const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {priceRu(product.price)}
        {product.oldPrice && (
          <Tag className={styles.oldPrice} color='green'>
            {priceRu(product.price - product.oldPrice)}
          </Tag>
        )}
      </div>
      <div className={styles.credit}>
        {priceRu(product.credit)}/<span className={styles.month}>мес.</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((categorie) => (
          <Tag color='ghost' key={categorie}>
            {categorie}
          </Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.rateTitle}>{product.reviewCount} отзывов</div>
      <div className={styles.hr}>
        <hr />
      </div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>фичи</div>
      <div className={styles.advBlock}>
        <div className={styles.advantages}>
          <div>Преимущества</div>
          <div>{product.advantages}</div>
        </div>
        <div className={styles.disadvantages}>
          <div>Недостатки</div>
          <div>{product.disadvantages}</div>
        </div>
      </div>
      <div className={styles.hr}>
        <hr />
      </div>
      <div className={styles.actions}>
        <Button appearence='primary'>Узнать подробнее</Button>
        <Button appearence='ghost' arrow={"right"}>
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};

export default Product;
