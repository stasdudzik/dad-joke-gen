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
  background-color: #f05454;
  box-shadow: 0.4rem 0.6rem #aa3a3a;
  font-size: 1.5rem;
`;

const ButtonStop = ({ text }) => {
  return <Button>{text}</Button>;
};

export default ButtonStop;
