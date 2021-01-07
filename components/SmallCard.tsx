import styled from "@emotion/styled";
import { useState } from "react";
import { CardContentT } from "../typesTS/CardContent";

// import styled from "@emotion/styled/macro";

export default function SmallCard({ card }: { card: CardContentT }) {
  // styles

  const Container = styled.div`
    margin-top: 50px;
    margin-left: 150px;
    display: grid;
    width: 278px;
    height: 105px;
    grid-template-rows: 45px 60px;
    grid-template-columns: 50px 194px;
    background-color: #fff;
  `;
  const CardPic = styled.img`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
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
    margin-top: 25px;
    margin-left: 15px;
  `;
  const Text = styled.div`
    font-family: "Jost", sans-serif;
    font-size: 26px;
    margin-left: 14px;
    margin-top: 1px;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  `;
  const AdditionText = styled.span`
    font-family: "Jost", sans-serif;
    font-size: 18px;
  `;
  // functionality
  return (
    <Container>
      <CardPic src={card.picAdress}></CardPic>
      <Label>{card.label}</Label>
      <Text>
        {card.text} <AdditionText>{card.detailInfo} </AdditionText>
      </Text>
    </Container>
  );
}
