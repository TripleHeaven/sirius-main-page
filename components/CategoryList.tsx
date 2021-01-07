import styled from "@emotion/styled";

import Category from "./Category";
import { useState } from "react";
import { CategoryT } from "../typesTS/CategoryT";
// import styled from "@emotion/styled/macro";

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  margin-top: 17px;
`;

export default function CategoryList() {
  // styles
  const [categories] = useState<CategoryT[]>([
    { id: 1, picAdress: "/categoryPics/1.png", text: "Занятия" },
    { id: 2, picAdress: "/categoryPics/2.png", text: "Учащиеся" },
    { id: 3, picAdress: "/categoryPics/3.png", text: "Тренеры" },
    { id: 4, picAdress: "/categoryPics/4.png", text: "Финансы" },
    { id: 5, picAdress: "/categoryPics/5.png", text: "Абонементы" },
    { id: 6, picAdress: "/categoryPics/6.png", text: "Доступ в CRM" },
    { id: 7, picAdress: "/categoryPics/7.png", text: "Рассылки" },
    { id: 8, picAdress: "/categoryPics/8.png", text: "Отчеты" },
    { id: 9, picAdress: "/categoryPics/9.png", text: "Настройки" },
  ]);
  return (
    <Categories>
      {categories.map((item) => (
        <Category key={item.id} category={item}></Category>
      ))}
    </Categories>
  );
}
