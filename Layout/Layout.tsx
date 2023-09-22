import { ILayout } from "./Layout.props";
import styles from "./Layout.module.scss";
import cn from "classnames";

export const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};
