import React from "react";
import { TopPageComponentProps } from "./TopPage.props";
import Tag from "@/Components/Tag/Tag";
import Titles from "@/Components/Htag/Htag";

const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
  return (
    <>
      <div>
        <Titles tag='h1'>{page.title}</Titles>
        {products && <Tag>{products.length}</Tag>}
      </div>
      {products && products.length}
    </>
  );
};

export default TopPageComponent;
