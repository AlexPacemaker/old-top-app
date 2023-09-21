import React from "react";
import Titles from "@/Components/Titles/Titles";
import Button from "@/Components/Button/Button";
import Paragraph from "@/Components/Paragraph/Paragraph";
import Tag from "@/Components/Tag/Tag";

export default function Home(): JSX.Element {
  return (
    <div>
      <Titles tag='h1'>Text</Titles>
      <Button appearence='primary'>Primary</Button>
      <Button appearence='ghost'>Ghost</Button>
      <Paragraph size='s'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, consectetur?</Paragraph>
      <Paragraph size='m'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta corrupti asperiores eligendi cumque quia beatae
        fugiat doloremque illum repudiandae temporibus.
      </Paragraph>
      <Paragraph size='l'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit tenetur ratione, molestias odio, quo dicta
        ipsam vero optio, accusamus perspiciatis! Sed distinctio eius quisquam, vel nam deserunt reiciendis harum!
      </Paragraph>
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
    </div>
  );
}
