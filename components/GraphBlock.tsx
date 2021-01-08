import styled from "@emotion/styled";
import Graph from "./Graph";
// import SearchBar from "./SearchBar";
// import styled from "@emotion/styled/macro";

export default function GraphBlock() {
  // styles
  const Container = styled.div`
    display: flex;
    width: 575px;
    height: 315px;
    background: #fff;
  `;

  const InfoPicBlock = styled.div`
    display: block;
    width: 200px;
    height: 300px;
  `;
  return (
    <Container>
      <Graph></Graph>
    </Container>
  );
}
