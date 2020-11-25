import React from "react";
import Joke from "../../components/Joke/Joke";
import AppContext from "../../context";

const GreatView = () => {
  return (
    <>
      <h1>😹 These are my favourite jokes</h1>
      <Joke />
    </>
  );
};

export default GreatView;
