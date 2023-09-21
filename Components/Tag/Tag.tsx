import React from "react";
import cn from "classnames";
import styles from "./Tag.module.scss";
import { ITag } from "./Tag.props";

const Tag = ({ children, size = "s", color = "ghost", href, className, ...props }: ITag): JSX.Element => {
  return (
    <div className={cn(styles.Tag, styles[size], styles[color])} {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
