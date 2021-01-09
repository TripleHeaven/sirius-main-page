import styled from "@emotion/styled";
import { useState } from "react";
import { CardContentT } from "../../typesTS/CardContent";
import { PupilStatT } from "../../typesTS/PupilStatT";

// import styled from "@emotion/styled/macro";

export default function BigCard({
  pupilStatElem,
}: {
  pupilStatElem: PupilStatT;
}) {
  // styles

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 279px;
    height: 230px;
    background: #fff;
  `;
  const BasicInfoContainer = styled.div`
    display: grid;
    width: 278px;
    grid-template-rows: 45px 40px;
    grid-template-columns: 50px 194px;
    background-color: #fff;
  `;
  const DetailedInfoContainer = styled.div`
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    height: 103px;
    flex-direction: column;
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
  const InfoNode = styled.div`
    font-family: "Jost", sans-serif;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    display: flex;
    max-height: 15px;
    padding-left: 19px;
    // padding-right: 30px;
  `;
  const NodeLabel = styled.div``;
  const NodeQuantity = styled.div`
    margin-left: auto;
    color: black;
    width: 45px;
  `;
  const Dots = styled.div`
    font-size: 20px;
    overflow: hidden;
    height: 10px;
    float: right;
    margin-top: 2px;
    line-height: 7px;
    text-align: center;
    letter-spacing: 1px;
    margin-left: 8px;
  `;
  const LabelText = styled.span``;
  // functionality
  const addDots = (length) => {
    return ".".repeat(28 - length);
  };
  const [nodeText1] = useState<string>("За последнюю неделю");
  const [nodeText2] = useState<string>("Без абонемента");
  const [nodeText3] = useState<string>("Неактивные");
  const [nodeText4] = useState<string>("Добавлено за день");

  return (
    <Container>
      <BasicInfoContainer>
        <CardPic src={pupilStatElem.picAdress}></CardPic>
        <Label>Количество учеников</Label>
        <Text>{pupilStatElem.quantity}</Text>
      </BasicInfoContainer>
      <DetailedInfoContainer>
        <InfoNode>
          <NodeLabel>
            <LabelText>{nodeText1}</LabelText>{" "}
            <Dots>{addDots(nodeText1.length)}</Dots>
          </NodeLabel>
          <NodeQuantity>{pupilStatElem.lastWeek}</NodeQuantity>
        </InfoNode>
        <InfoNode>
          <NodeLabel>
            <LabelText>{nodeText2}</LabelText>
            <Dots>{addDots(nodeText2.length)}</Dots>
          </NodeLabel>
          <NodeQuantity>{pupilStatElem.withoutAbo}</NodeQuantity>
        </InfoNode>
        <InfoNode>
          <NodeLabel>
            <LabelText>{nodeText3}</LabelText>
            <Dots>{addDots(nodeText3.length)}</Dots>
          </NodeLabel>
          <NodeQuantity>{pupilStatElem.withoutAbo}</NodeQuantity>
        </InfoNode>
        <InfoNode>
          <NodeLabel>
            <LabelText>{nodeText4}</LabelText>
            <Dots>{addDots(nodeText4.length)}</Dots>
          </NodeLabel>
          <NodeQuantity>{pupilStatElem.withoutAbo}</NodeQuantity>
        </InfoNode>
      </DetailedInfoContainer>
    </Container>
  );
}
