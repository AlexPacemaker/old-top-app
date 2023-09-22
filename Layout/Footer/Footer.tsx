import styles from "./Footer.module.scss";
import cn from "classnames";
import { IFooter } from "./Footer.props";

export const Footer = ({ ...props }: IFooter): JSX.Element => {
  return <div {...props}>Footer</div>;
};
