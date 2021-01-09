import styled from "@emotion/styled";
import SpecialCard from "./Cards/SpecialCard";
import BigCard from "./Cards/BigCard";
import SmallCard from "./Cards/SmallCard";
import { PupilStatT } from "../typesTS/PupilStatT";
import { useState } from "react";
import { CardContentT } from "../typesTS/CardContent";

// import SearchBar from "./SearchBar";
// import styled from "@emotion/styled/macro";

export default function MainPage() {
  // styles
  const CardsSection = styled.div`
    display: grid;
    margin-top: 15px;
    grid-template-columns: 278px 278px 278px;
    grid-template-rows: auto auto;
    grid-gap: 18.5px;
    margin-left: 31px;
  `;
  const BigElement = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  `;
  const CardOne = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  `;
  const CardTwo = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  `;
  const CardThree = styled.div`
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
  `;
  const CardFour = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  `;
  const CardFive = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  `;
  const CardSix = styled.div`
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
  `;
  // state
  const [pupilStatElem] = useState<PupilStatT>({
    quantity: 250,
    lastWeek: 25,
    withoutAbo: 150,
    inactive: 25,
    dayAdded: 50,
    picAdress: "/cardPics/bigCardPic.png",
  });

  const [cardContent] = useState<CardContentT[]>([
    {
      id: 11,
      picAdress: "/cardPics/1.png",
      label: "Должников:",
      text: "12",
      detailInfo: "(1 850,5 руб)",
    },
    {
      id: 22,
      picAdress: "/cardPics/2.png",
      label: "Без абонемента:",
      text: "30",
      detailInfo: "",
    },
    {
      id: 33,
      picAdress: "/cardPics/3.png",
      label: "Количество тренеров:",
      text: "250",
      detailInfo: "",
    },
    {
      id: 44,
      picAdress: "/cardPics/4.png",
      label: "К оплате сегодня:",
      text: "121",
      detailInfo: "",
    },
    {
      id: 55,
      picAdress: "/cardPics/5.png",
      label: "К оплате завтра:",
      text: "32",
      detailInfo: "",
    },
    {
      id: 66,
      picAdress: "/cardPics/6.png",
      label: "Получить выписку по зарплате тренеров",
      text: "",
      detailInfo: "",
    },
  ]);
  return (
    <CardsSection>
      <BigElement>
        <BigCard pupilStatElem={pupilStatElem}></BigCard>
      </BigElement>
      <CardOne>
        <SmallCard card={cardContent[0]}></SmallCard>
      </CardOne>
      <CardTwo>
        <SmallCard card={cardContent[1]}></SmallCard>
      </CardTwo>
      <CardThree>
        <SmallCard card={cardContent[2]}></SmallCard>
      </CardThree>
      <CardFour>
        <SmallCard card={cardContent[3]}></SmallCard>
      </CardFour>
      <CardFive>
        <SmallCard card={cardContent[4]}></SmallCard>
      </CardFive>
      <CardSix>
        <SpecialCard card={cardContent[5]}></SpecialCard>
      </CardSix>
    </CardsSection>
  );
}
