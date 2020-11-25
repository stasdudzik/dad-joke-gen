import React from "react";
import Joke from "../Joke/Joke";

const ListOfJokes = ({ favJokes }) => {
  return (
    <div>
      {favJokes.map((item) => (
        <p>${item}</p>
      ))}
    </div>
  );
};

export default ListOfJokes;
