import styled from "@emotion/styled";

import SearchBar from "./SearchBar";
import CurrentUser from "./CurrentUser";
import CardsSection from "./CardSection";
import GraphSection from "./GraphSection";
// import styled from "@emotion/styled/macro";

export default function RightSection() {
  // styles
  const MainBlock = styled.div`
    width: 1230px;
    height: 900px;
    display: flex;
    flex-direction: column;
  `;
  const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 43px;
    margin-top: 30px;
  `;

  return (
    <MainBlock>
      <TopBar>
        <SearchBar></SearchBar>
        <CurrentUser></CurrentUser>
      </TopBar>
      <GraphSection></GraphSection>
      <CardsSection></CardsSection>
    </MainBlock>
  );
}
