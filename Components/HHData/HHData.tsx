import React from "react";
import styles from "./HHData.module.scss";
import cn from "classnames";
import { HHDataProps } from "./HHData.props";

const HHData = ({ count }: HHDataProps): JSX.Element => {
  return <div>{count}</div>;
};

export default HHData;
