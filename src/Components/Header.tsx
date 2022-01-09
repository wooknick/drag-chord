import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  text-align: center;
  line-height: 64px;
`;

const Header: React.FunctionComponent = () => <Wrapper>header</Wrapper>;

export default Header;
