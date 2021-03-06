import styled from "@emotion/styled";

import LeftMenu from "./LeftMenu";
import RightSection from "./RightSection";
// import SearchBar from "./SearchBar";
// import styled from "@emotion/styled/macro";

const MainWindow = styled.div`
  width: 1440px;
  height: 900px;
  background: #f1f4f8;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;
export default function MainPage() {
  // styles

  return (
    <MainWindow>
      <LeftMenu></LeftMenu>
      <RightSection></RightSection>
    </MainWindow>
  );
}
