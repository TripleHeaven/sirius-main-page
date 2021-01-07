import styled from "@emotion/styled";
import { useState } from "react";
import SearchBar from "./SearchBar";
import CurrentUser from "./CurrentUser";
import SmallCard from "./SmallCard";
import { CardContentT } from "../typesTS/CardContent";
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
  // functionality
  // const [searchText, setSearchText] = useState<string>("Поиск клиента");
  return (
    <MainBlock>
      <TopBar>
        <SearchBar></SearchBar>
        <CurrentUser></CurrentUser>
      </TopBar>
      <SmallCard card={cardContent[0]}></SmallCard>
    </MainBlock>
  );
}
