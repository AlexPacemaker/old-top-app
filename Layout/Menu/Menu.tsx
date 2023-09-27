import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import { useContext } from "react";
import styles from "./Menu.module.scss";
import { AppContext } from "@/context/app.context";
import { FirtsLevelMenuItem, PageItem } from "@/Interfaces/menu.interface";
import { TopLevelCategory } from "@/Interfaces/toppage.interface";
import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";

const firstLevelMenu: FirtsLevelMenuItem[] = [
  { route: "courses", name: "Курсы", icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: "books", name: "Книги", icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: "services", name: "Сервисы", icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: "products", name: "Продукты", icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory == secondCategory) {
            m.isOpened = true;
          }
          return m;
        })
      );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div key={menu.id}>
            <Link href={`/${menu.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: menu.id == firstCategory,
                })}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </Link>
            {menu.id == firstCategory && buildSecondLevel(menu)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirtsLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => {
          if (m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div className={styles.secondLevel}>{m._id.secondCategory}</div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <Link
        key={page._id}
        href={`/${route}/${page.alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath,
        })}
      >
        {page.category}
      </Link>
    ));
  };

  return (
    <div className={styles.menu}>
      <ul>{buildFirstLevel()}</ul>
    </div>
  );
};
