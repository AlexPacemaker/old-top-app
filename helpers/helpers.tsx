import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";
import { FirtsLevelMenuItem } from "@/Interfaces/menu.interface";
import { TopLevelCategory } from "@/Interfaces/toppage.interface";

export const firstLevelMenu: FirtsLevelMenuItem[] = [
  { route: "courses", name: "Курсы", icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: "books", name: "Книги", icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: "services", name: "Сервисы", icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: "products", name: "Продукты", icon: <ProductsIcon />, id: TopLevelCategory.Products },
];
