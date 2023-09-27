import { useContext } from "react";
import styles from "./Menu.module.scss";
import { AppContext } from "@/context/app.context";
import { FirtsLevelMenuItem } from "@/Interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";

const firstLevelMenu: FirtsLevelMenuItem = [{ route: "courses", name: "Курсы", icon: <CoursesIcon /> }];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  return (
    <div>
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};
