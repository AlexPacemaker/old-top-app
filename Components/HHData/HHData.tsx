import React from "react";
import styles from "./HHData.module.scss";
import { HHDataProps } from "./HHData.props";
import Card from "../Card/Card";

const HHData = ({ count }: HHDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card color='white' className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
    </div>
  );
};

export default HHData;
