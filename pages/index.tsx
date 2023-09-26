import React, { useState } from "react";
import Titles from "@/Components/Titles/Titles";
import Button from "@/Components/Button/Button";
import Paragraph from "@/Components/Paragraph/Paragraph";
import Tag from "@/Components/Tag/Tag";
import Rating from "@/Components/Rating/Rating";
import { withLayout } from "@/Layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "@/Interfaces/menu.interface";

const Home = ({ menu }: HomeProps): JSX.Element => {
  const [rating, setRating] = useState<number>(4);

  return (
    <div>
      <Titles tag='h1'>Title 1</Titles>
      <Button appearence='primary'>Primary</Button>
      <Button appearence='ghost'>Ghost</Button>
      <Paragraph size='s'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, consectetur?</Paragraph>
      <Paragraph size='m'>123</Paragraph>
      <Paragraph size='l'>12345</Paragraph>
      <Tag size='s' color='ghost'>
        Ghost
      </Tag>
      <Tag size='m' color='red'>
        Red
      </Tag>
      <Tag size='s' color='green'>
        Green
      </Tag>
      <Tag color='primary' size='m'>
        Green
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </div>
  );
};

export default withLayout(Home);

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
