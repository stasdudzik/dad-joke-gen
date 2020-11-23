import React from "react";
import styled from "styled-components";

const Wrapper = styled.h1`
  margin-top: 10rem;
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
`;

const Header = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default Header;
