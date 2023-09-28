import React from "react";
import { TopPageComponentProps } from "./TopPage.props";

const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
  return <>{products && products.length}</>;
};

export default TopPageComponent;
