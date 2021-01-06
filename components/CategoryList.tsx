import styled from "@emotion/styled";

import Category from "./Category";
import { useState } from "react";
import { CategoryT } from "../typesTS/CategoryT";
// import styled from "@emotion/styled/macro";

const Categories = styled.div`
display: flex;
flex-direction-column;
background-color: black;
margin-top:17px`;

export default function CategoryList() {
  // styles
  const [categories] = useState<CategoryT[]>([
    { id: 1, picAdress: "/categoryPics/1.png", text: "Занятия" },
  ]);
  return (
    <Categories>
      {categories.map((item) => (
        <Category key={item.id} category={item}></Category>
      ))}
    </Categories>
  );
}
