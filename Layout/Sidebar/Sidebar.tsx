import { ISidebar } from "./Sidebar.props";
import styles from "./Sidebar.module.scss";
import cn from "classnames";

export const Sidebar = ({ ...props }: ISidebar): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};
