import { ISidebar } from "./Sidebar.props";
import styles from "./Sidebar.module.scss";
import cn from "classnames";
import { Menu } from "../Menu/Menu";

export const Sidebar = ({ ...props }: ISidebar): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};
