import React from "react";
import styles from "./Search.module.scss";
import cn from "classnames";
import { SearchProps } from "./Search.props";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = React.useState<string>("");

  return (
    <div className={cn(className, styles.search)}>
      <Input placeholder='Поиск...' value={search} onChange={(e) => setSearch(e.target.value)} />
      <Button appearence='primary' className={styles.button}></Button>
    </div>
  );
};

export default Search;
