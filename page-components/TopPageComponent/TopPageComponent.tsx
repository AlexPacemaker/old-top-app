import React from "react";
import { TopPageComponentProps } from "./TopPage.props";
import Tag from "@/Components/Tag/Tag";
import Htag from "@/Components/Htag/Htag";

const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
  return (
    <>
      <div>
        <Htag tag='h1'>{page.title}</Htag>
        {products && <Tag>{products.length}</Tag>}
      </div>
      {products && products.length}
    </>
  );
};

export default TopPageComponent;
