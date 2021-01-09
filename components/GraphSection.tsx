import styled from "@emotion/styled";
import Graph from "./Graph";
// import SearchBar from "./SearchBar";
// import styled from "@emotion/styled/macro";

export default function GraphSection() {
  // styles

  const GraphSection = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    margin-left: 31px;
  `;
  return (
    <GraphSection>
      <Graph picAdress={"/graphPics/yaLogo.png"}></Graph>
      <Graph picAdress={"/graphPics/palInfo.png"}></Graph>
    </GraphSection>
  );
}
