import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  color: white;
  padding: 0.6rem 0.6rem;
  width: 10rem;
  height: 3rem;
  margin: 5rem 5rem;
  font-weight: 600;
  border-radius: 36px;
  background-color: #8db596;
  box-shadow: 0.4rem 0.6rem #59886b;
  font-size: 1.5rem;
`;

const ButtonFun = ({ text }) => {
  return <Button>{text}</Button>;
};

export default ButtonFun;
