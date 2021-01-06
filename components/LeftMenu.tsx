import styled from "@emotion/styled";
import { useState } from "react";

import CategoryList from "./CategoryList";
// import styled from "@emotion/styled/macro";

const LeftMenuWindow = styled.div`
  width: 210px;
  height: 900px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 0;
`;
const Logo = styled.img`
  height: 69px;
  position: absolute;
  top: 30px;
  left: 45px;
`;
const Hide = styled.img`
  position: absolute;
  top: 30px;
  left: 176px;
`;
const HorizontalLine = styled.hr`
  margin-top: 130px;
  opacity: 0.2;
  width: 100%;
`;

export default function LeftMenu() {
  // styles
  const [categories] = useState([{ id: 1, pic: "none", text: "test" }]);
  return (
    <LeftMenuWindow>
      {/* Top bar pic and back icon */}
      <Logo src="/logo.png"></Logo>
      <Hide src="/hide.png"></Hide>
      <HorizontalLine></HorizontalLine>
      <CategoryList></CategoryList>
    </LeftMenuWindow>
  );
}
