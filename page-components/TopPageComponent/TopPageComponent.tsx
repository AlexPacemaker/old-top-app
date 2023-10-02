import React, { useReducer } from "react";
import styles from "./TopPage.module.scss";
import { TopPageComponentProps } from "./TopPage.props";
import Tag from "@/Components/Tag/Tag";
import Htag from "@/Components/Htag/Htag";
import HHData from "@/Components/HHData/HHData";
import { TopLevelCategory } from "@/Interfaces/toppage.interface";
import Advantages from "@/Components/Advantages/Advantages";
import { SortEnum } from "@/Components/Sort/Sort.props";
import Sort from "@/Components/Sort/Sort";
import { sortReducer } from "./sort.reducer";
import Product from "@/Components/Product/Product";

const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating,
  });

  const setSort = (sort: SortEnum) => {
    dispathSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products && (
          <Tag color='grey' size='m'>
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>{sortedProducts && sortedProducts.map((p) => <Product key={p._id} product={p} />)}</div>
      <div className={styles.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Tag color='red' size='m'>
          hh.ru
        </Tag>
      </div>
      <div>
        {firstCategory == TopLevelCategory.Courses && page.hh && <HHData {...page.hh} />}
        {page.advantages && page.advantages.length > 0 && (
          <>
            <Htag tag='h2'>Преимущества</Htag>
            <Advantages advantages={page.advantages} />
          </>
        )}
        {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
        <Htag tag='h2'>Получаемые навыки</Htag>
        {page.tags.map((t) => (
          <Tag key={t} size='m' color='primary'>
            {t}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default TopPageComponent;
