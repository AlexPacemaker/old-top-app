import { ISidebar } from "./Sidebar.props";
import styles from "./Sidebar.module.scss";
import cn from "classnames";
import { Menu } from "../Menu/Menu";
import Logo from "../projectlogo.svg";
import Search from "@/Components/Search/Search";

export const Sidebar = ({ className, ...props }: ISidebar): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
    </div>
  );
};
