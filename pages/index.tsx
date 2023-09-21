import React from "react";
import Titles from "@/Components/Titles/Titles";
import Button from "@/Components/Button/Button";

export default function Home(): JSX.Element {
  return (
    <div>
      <Titles tag='h1'>Text</Titles>
      <Button appearence='primary'>Primary</Button>
      <Button appearence='ghost'>Ghost</Button>
    </div>
  );
}
