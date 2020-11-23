import React from "react";
import Header from "./components/Header/Header";
import Joke from "./components/Joke/Joke";
import Buttons from "./components/Buttons/Buttons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://icanhazdadjoke.com", {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            joke: result.joke,
            id: result.id,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
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
          <Header text="👴👔👖 Dad Joke Generator 🤦🤦🤦" />
          <Joke key={id} text={joke} />
          <Buttons />
        </>
      );
    }
  }
}

export default App;
