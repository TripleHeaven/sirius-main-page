import styled from "@emotion/styled";
import { useState } from "react";

// import styled from "@emotion/styled/macro";

export default function SearchBar() {
  // styles

  const SearchText = styled.input`
    float: left;
    margin-left: 30px;
    width: 460px;
    height: 43px;
    border-radius: 67px;
    border: none;
    background-image: url("searchPic.png");
    background-repeat: no-repeat;
    background-position: 15px 14px;
    padding-left: 36px;

    font-family: "Jost", sans-serif;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    &:focus {
      outline: none;
    }
  `;
  const SearchPic = styled.img`
    height: 6px;
    margin
  `;
  // functionality
  return (
    <form>
      <SearchText
        key="test"
        type="text"
        placeholder="Поиск клиента"
      ></SearchText>
    </form>
  );
}
