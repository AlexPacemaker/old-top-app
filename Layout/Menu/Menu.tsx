import { useContext } from "react";
import styles from "./Menu.module.scss";
import { AppContext } from "@/context/app.context";
import { FirtsLevelMenuItem } from "@/Interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";
import { TopLevelCategory } from "@/Interfaces/toppage.interface";

const firstLevelMenu: FirtsLevelMenuItem = [
  { route: "courses", name: "Курсы", icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: "books", name: "Книги", icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: "services", name: "Сервисы", icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: "products", name: "Продукты", icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

const buildFirstLevel = () => {};

const buildSecondLevel = () => {};

const buildThirdLevel = () => {};

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};
