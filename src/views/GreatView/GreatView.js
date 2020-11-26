import React from "react";
import ListOfJokes from "../../components/ListOfJokes/ListOfJokes";
import styled from "styled-components";

const Header = styled.h1`
  margin-top: 10rem;
  font-size: 2.5em;
  text-align: center;
  color: #81b214;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 5rem;
`;

const Text = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: #db6400;
  list-style: none;
  font-weight: 500;
`;

const GreatView = () => {
  const favJokes = JSON.parse(localStorage.getItem("Stas"));

  return (
    <>
      <Header>😹 My favourite jokes 😹</Header>

      {Object.values(favJokes).map((item) => (
        <Wrapper>
          <Text>{item}</Text>
        </Wrapper>
      ))}
    </>
  );
};

export default GreatView;
