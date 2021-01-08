import styled from "@emotion/styled";
import { useState } from "react";
import SearchBar from "./SearchBar";
import CurrentUser from "./CurrentUser";
import SmallCard from "./SmallCard";
import { CardContentT } from "../typesTS/CardContent";
import { PupilStatT } from "../typesTS/PupilStatT";
import BigCard from "./BigCard";
import Graph from "./Graph";
// import styled from "@emotion/styled/macro";

export default function RightSection() {
  // styles
  const MainBlock = styled.div`
    width: 1230px;
    height: 900px;

    position: absolute;
    left: 218px;
  `;
  const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 43px;
    margin-top: 30px;
  `;
  const [cardContent] = useState<CardContentT[]>([
    {
      id: 11,
      picAdress: "/cardPics/1.png",
      label: "Должников:",
      text: "12",
      detailInfo: "(1 850,5 руб)",
    },
  ]);
  const [pupilStatElem] = useState<PupilStatT>({
    quantity: 250,
    lastWeek: 25,
    withoutAbo: 150,
    inactive: 25,
    dayAdded: 50,
    picAdress: "/bigCardPic.png",
  });
  // functionality
  // const [searchText, setSearchText] = useState<string>("Поиск клиента");
  return (
    <MainBlock>
      <TopBar>
        <SearchBar></SearchBar>
        <CurrentUser></CurrentUser>
      </TopBar>
      <SmallCard card={cardContent[0]}></SmallCard>
      <BigCard pupilStatElem={pupilStatElem}></BigCard>
      <Graph picAdress={"/yaLogo.png"}></Graph>
      <Graph picAdress={"/palInfo.png"}></Graph>
    </MainBlock>
  );
}
