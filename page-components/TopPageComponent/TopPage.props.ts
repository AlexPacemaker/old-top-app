import { ProductModel } from "@/Interfaces/product.interface";
import { TopLevelCategory, TopPageModel } from "@/Interfaces/toppage.interface";

export interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel;
}
