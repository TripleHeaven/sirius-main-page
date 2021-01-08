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
  margin: 0;
`;

const Logo = styled.img`
  height: 69px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -14px;
`;
const Hide = styled.img`
  width: 13px;
  height: 12px;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 32px;
`;
const HorizontalLine = styled.hr`
  margin-top: 30px;
  opacity: 0.2;
  width: 100%;
`;

export default function LeftMenu() {
  // styles

  return (
    <LeftMenuWindow>
      {/* Top bar pic and back icon */}
      {/* <LogoContainer> */}
      <Hide src="/hide.png"></Hide>
      <Logo src="/logo.png"></Logo>
      {/* </LogoContainer> */}
      <HorizontalLine></HorizontalLine>
      <CategoryList></CategoryList>
    </LeftMenuWindow>
  );
}
