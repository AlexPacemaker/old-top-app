import React from "react";
import axios from "axios";

interface Pizza {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
}

interface PizzaPageProps {
  pizzas?: Pizza[];
}

const PizzaPage = ({ pizzas }: PizzaPageProps): JSX.Element => {
  return (
    <div>
      <h1>Pizza Menu</h1>
      <ul>
        {pizzas &&
          pizzas.map((pizza) => (
            <li key={pizza.id}>
              <h2>{pizza.title}</h2>
              <p>{pizza.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export async function getStaticProps(): Promise<{ props: PizzaPageProps }> {
  const response = await axios.get<Pizza[]>("https://alex-pacemaker.ru/pizza");
  const pizzas = response.data;

  return {
    props: {
      pizzas,
    },
  };
}

export default PizzaPage;
