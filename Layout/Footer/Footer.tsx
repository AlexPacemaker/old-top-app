import styles from "./Footer.module.scss";
import cn from "classnames";
import { IFooter } from "./Footer.props";

export const Footer = ({ className, ...props }: IFooter): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>Все права защищены {}</div>
    </footer>
  );
};
