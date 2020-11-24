import React from "react";
import Header from "./components/Header/Header";
import Joke from "./components/Joke/Joke";
import ButtonFun from "./components/Buttons/ButtonFun";
import ButtonStop from "./components/Buttons/ButtonStop";
import styled from "styled-components";
import Modal from "./components/Modal/Modal";
import axios from "axios";

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
      isModalOpen: false,
      joke: "Do you wanna hear a joke?",
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

  fetchRandomJoke = () => {
    return axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        console.log(res["data"]["joke"]);
        return res;
      })
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        this.setState({ joke: res["data"]["joke"] });
      });
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { joke, id, isModalOpen } = this.state;

    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    return (
      <>
        <Header />
        <Joke key={id} text={joke} />
        <Wrapper>
          <ButtonStop fetchJoke={this.fetchRandomJoke} text="Ugh." />
          <ButtonFun
            fetchJoke={this.fetchRandomJoke}
            openModalFn={this.openModal}
            text="Haha"
          />
        </Wrapper>
        {isModalOpen && <Modal closeModalFn={this.closeModal} />}
      </>
    );
    // }
  }
}

export default App;
