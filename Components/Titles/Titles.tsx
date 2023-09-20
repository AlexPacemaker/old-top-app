import React from "react";
import { ITitlesProps } from "./Titles.props";

const Titles = ({ tag, children }: ITitlesProps): JSX.Element => {
  return <h1>{children}</h1>;
};

export default Titles;
