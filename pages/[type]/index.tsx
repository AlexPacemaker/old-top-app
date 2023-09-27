import { withLayout } from "@/Layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "@/Interfaces/menu.interface";

const Search = ({ menu }: HomeProps): JSX.Element => {
  return <></>;
};

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
    firstCategory,
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}