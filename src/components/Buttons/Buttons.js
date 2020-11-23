import React from "react";
import styled from "styled-components";
import ButtonFun from "./ButtonFun";
import ButtonStop from "./ButtonStop";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Buttons = () => {
  return (
    <Wrapper>
      <ButtonStop text="Please, stop" />
      <ButtonFun text="LOL" />
    </Wrapper>
  );
};

export default Buttons;
