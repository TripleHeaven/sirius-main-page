import styled from "@emotion/styled";
import { useState } from "react";
import { CardContentT } from "../../typesTS/CardContent";

// import styled from "@emotion/styled/macro";

export default function SpecialCard({ card }: { card: CardContentT }) {
  // styles

  const Container = styled.div`
    display: grid;
    width: 278px;
    height: 105px;
    grid-template-rows: 105px;
    grid-template-columns: 1fr 7frpx;
    background-color: #2e71f3;
  `;
  const CardPic = styled.img`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    margin-left: 20px;
    margin-top: 34px;
  `;
  const Label = styled.span`
    font-family: "Jost", sans-serif;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 15px;
    color: #fff;
    display: flex;
  `;

  // functionality
  return (
    <Container>
      <CardPic src={card.picAdress}></CardPic>
      <Label>{card.label}</Label>
    </Container>
  );
}
