import React from "react";
import styled from "styled-components";
import Chord from "../Components/Chord";

const Wrapper = styled.div`
  display: grid;
  border: white solid 8px;
  gap: 8px;
  grid-template-columns: repeat(16, 1fr);
`;

const Home: React.FunctionComponent = () => (
  <Wrapper>
    <Chord
      data={{
        key: "C#",
        third: "minor",
        fifth: "-5",
        seventh: "7",
        tension: "b13",
      }}
    />
    <Chord
      data={{
        key: "F",
        third: "major",
        seventh: "M7",
      }}
    />
    <Chord
      data={{
        key: "F",
        third: "major",
        base: "G",
      }}
    />
  </Wrapper>
);

export default Home;
