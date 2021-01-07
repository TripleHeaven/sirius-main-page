import styled from "@emotion/styled";
import { useState } from "react";
import SearchBar from "./SearchBar";
import CurrentUser from "./CurrentUser";

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

  // functionality
  // const [searchText, setSearchText] = useState<string>("Поиск клиента");
  return (
    <MainBlock>
      <TopBar>
        <SearchBar></SearchBar>
        <CurrentUser></CurrentUser>
      </TopBar>
    </MainBlock>
  );
}
