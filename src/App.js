import React from "react";
import Header from "./components/Header/Header";
import Joke from "./components/Joke/Joke";
import ButtonFun from "./components/Buttons/ButtonFun";
import ButtonStop from "./components/Buttons/ButtonStop";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      joke: "",
      id: "",
    };
  }

  // componentDidMount() {
  //   fetch("https://icanhazdadjoke.com", {
  //     headers: { Accept: "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           joke: result.joke,
  //           id: result.id,
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error,
  //         });
  //       }
  //     );
  // }

  fetchRandomJoke() {
    console.log("how");
    fetch("https://icanhazdadjoke.com", {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            joke: result.joke,
            id: result.id,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, joke, id } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <Header />
          <Joke key={id} text={joke} />
          <Wrapper>
            <ButtonStop onClick={this.fetchRandomJoke} text="Ugh." />
            <ButtonFun onClick={this.fetchRandomJoke} text="Haha" />
          </Wrapper>
        </>
      );
    }
  }
}

export default App;
