import React from "react";
import ListOfJokes from "../../components/ListOfJokes/ListOfJokes";

const GreatView = () => {
  const greatJokesArray = localStorage.getItem("Stas");

  return (
    <>
      <h1>😹 My favourite jokes 😹</h1>
      <div>
        <ul>
          {greatJokesArray.split(",").map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GreatView;
