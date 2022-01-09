import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 56px;
  background-color: #ced0e2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  grid-column: span 4;
  font-family: ${(props) => props.theme.fonts.chord};
  font-size: 24px;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
`;

const UnderBox = styled.div`
  display: flex;
  position: relative;
  top: 1px;
`;
const UpperBox = styled.div`
  display: flex;
  position: absolute;
  top: 4px;
  right: 0px;
  font-size: 16px;
`;

const Key = styled.div``;
const Third = styled.div``;
const Fifth = styled.div``;
const Seventh = styled.div``;
const Tension = styled.div``;
const Base = styled.div`
  position: relative;
  top: 4px;
  left: 8px;
`;

interface Props {
  data: Chord;
}

const Chord: React.FunctionComponent<Props> = ({ data }: Props) => (
  <Wrapper>
    <Box>
      <UnderBox>
        <Key>{data.key}</Key>
        <Third>
          {data.third === "minor" && "m"}
          {data.third === "sus4" && "sus4"}
        </Third>
        {data.seventh && <Seventh>{data.seventh}</Seventh>}
        {data.fifth && <Fifth>{data.fifth}</Fifth>}
        {data.base && <Base>{`/ ${data.base}`}</Base>}
      </UnderBox>
      <UpperBox>{data.tension && <Tension>{data.tension}</Tension>}</UpperBox>
    </Box>
  </Wrapper>
);

export default Chord;
