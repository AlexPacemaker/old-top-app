import React, { KeyboardEvent } from "react";
import styles from "./Search.module.scss";
import cn from "classnames";
import { SearchProps } from "./Search.props";
import Input from "../Input/Input";
import Button from "../Button/Button";
import GlassIcon from "./glass.svg";
import { useRouter } from "next/router";

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = React.useState<string>("");
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        className={styles.input}
        placeholder='Поиск...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button appearence='primary' className={styles.button} onClick={goToSearch} onKeyDown={handleKeyDown}>
        <GlassIcon />
      </Button>
    </div>
  );
};

export default Search;
