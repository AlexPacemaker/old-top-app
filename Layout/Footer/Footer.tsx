import styles from "./Footer.module.scss";
import cn from "classnames";
import { IFooter } from "./Footer.props";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: IFooter): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>Все права защищены {format(new Date(), "yyyy")}</div>
      <a href='#' target='_blank'>
        Пользовательское соглашение
      </a>
      <a href='#' target='_blank'>
        Политика конфиденциальности
      </a>
    </footer>
  );
};
