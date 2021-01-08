import styled from "@emotion/styled";
import { CategoryT } from "../typesTS/CategoryT";
import { rgba } from "emotion-rgba";
// import styled from "@emotion/styled/macro";
// const CategoryItem = styled.div`
//   height: 45px;
//   background-color: #fff;
//   width: 100%;
//   display: grid;
//   grid-template-columns: 50px auto;
//   grid-template-rows: 45px;
// `;

const activeColor = "#EDF0F5";
const VerticalLine = styled.div`
  display: none;
  width: 3px; /* Line width */
  background-color: #2e71f3; /* Line color */
  height: 41px; /* Override in-line if you want specific height. */
  float: left;
  margin-top: 2px;
  &:before {
    display: block; // это блочный элемент
    content: ""; // без него псевдоэлемент не отрисуется
    width: 100%; // на всю ширину блока-родителя
    height: 2px; // высота скошенного края
    background: black; // цвет скошенного края
    margin-top: 0px;
    // пристроим к левой части блока
    transform: translateY(-100%);
    background: linear-gradient(to top left, #2e71f3 50%, white 50%);
  }
  &:after {
    display: block; // это блочный элемент
    content: ""; // без него псевдоэлемент не отрисуется
    width: 100%; // на всю ширину блока-родителя
    height: 2px; // высота скошенного края
    background: black; // цвет скошенного края
    margin-top: 41px;
    // пристроим к левой части блока
    transform: translateY(-100%);
    background: linear-gradient(
      to bottom right,
      #2e71f3 50%,
      ${activeColor} 50%
    );
  }
`;
const CategoryItem = styled.div`
  height: 45px;
  background-color: #fff;
  width: 100%;
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: 45px;
  ${VerticalLine}:hover & {
    display: none;
  }
  &:hover {
    background-color: ${rgba(activeColor, 1)};
  }
`;
// active inactiove above
const PicSection = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
`;
const TextSection = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-size: 13px;
`;
const inactiveColor = "#000";

const TextItem = styled.p`
  margin-left: 6px;
  margin-top: 16px;
  color: ${rgba(inactiveColor, 0.5)};
`;
const IconItem = styled.img`
  // margin-left: 28px;
  float: right;
  margin-right: 4px;
  margin-top: 17px;
  height: 16px;
`;
const Wrapper = styled.div`
  width: 100%;
  & ${CategoryItem}:hover ${VerticalLine} {
    display: block;
  }
`;
export default function Category({ category }: { category: CategoryT }) {
  // styles

  return (
    <Wrapper>
      <CategoryItem>
        <PicSection>
          <VerticalLine></VerticalLine>
          <IconItem src={category.picAdress}></IconItem>
        </PicSection>
        <TextSection>
          <TextItem>{category.text}</TextItem>
        </TextSection>
      </CategoryItem>
    </Wrapper>
  );
}
