import React from "react";
import styles from "./TopPage.module.scss";
import { TopPageComponentProps } from "./TopPage.props";
import Tag from "@/Components/Tag/Tag";
import Htag from "@/Components/Htag/Htag";
import HHData from "@/Components/HHData/HHData";
import { TopLevelCategory } from "@/Interfaces/toppage.interface";

const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products && (
          <Tag color='grey' size='m'>
            {products.length}
          </Tag>
        )}
        <span>Sorting</span>
      </div>
      <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>
      <div className={styles.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Tag color='red' size='m'>
          hh.ru
        </Tag>
      </div>
      <div>{firstCategory == TopLevelCategory.Courses && page.hh && <HHData {...page.hh} />}</div>
    </div>
  );
};

export default TopPageComponent;
