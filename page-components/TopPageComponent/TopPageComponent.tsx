import React from "react";
import styles from "./TopPage.module.scss";
import { TopPageComponentProps } from "./TopPage.props";
import Tag from "@/Components/Tag/Tag";
import Htag from "@/Components/Htag/Htag";

const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
  return (
    <>
      <div className={styles.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products && (
          <Tag color='grey' size='m'>
            {products.length}
          </Tag>
        )}
        <span>Sorting</span>
      </div>
    </>
  );
};

export default TopPageComponent;
