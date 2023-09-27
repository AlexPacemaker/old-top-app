import { useContext } from "react";
import styles from "./Menu.module.scss";
import { AppContext } from "@/context/app.context";
import { FirtsLevelMenuItem } from "@/Interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";
import { TopLevelCategory } from "@/Interfaces/toppage.interface";
import cn from "classnames";

const firstLevelMenu: FirtsLevelMenuItem[] = [
  { route: "courses", name: "Курсы", icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: "books", name: "Книги", icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: "services", name: "Сервисы", icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: "products", name: "Продукты", icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div key={menu.id}>
            <a href={`/${menu.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: menu.id == firstCategory,
                })}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = () => {};

  const buildThirdLevel = () => {};

  return (
    <div className={styles.menu}>
      <ul>{buildFirstLevel()}</ul>
    </div>
  );
};
