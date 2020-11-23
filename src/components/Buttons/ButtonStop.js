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

  &:active {
    vertical-align: top;
    padding: 8px 13px 6px;
  }
  &:focus {
    outline: none;
  }
`;

const buttonTextArray = [
  "Ugh.",
  "🤦🏻‍♂️",
  "omg dad",
  "the worst",
  "srsly?",
  "stop.",
  "please stop",
  "wow...",
];

const randomItemFromArray = (array) => {
  const item = array[Math.floor(Math.random() * array.length)];
  return item;
};

class ButtonStop extends React.Component {
  state = {
    text: "Ugh.",
  };

  changeText = (text) => {
    this.setState({ text });
  };

  render() {
    const { text } = this.state;
    return (
      <Button
        onClick={() => {
          this.changeText(randomItemFromArray(buttonTextArray));
        }}
      >
        {text}
      </Button>
    );
  }
}

export default ButtonStop;
