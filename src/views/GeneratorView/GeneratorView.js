import React from "react";
import Header from "../../components/Header/Header";
import Joke from "../../components/Joke/Joke";
import ButtonFun from "../../components/Buttons/ButtonFun";
import ButtonStop from "../../components/Buttons/ButtonStop";
import styled from "styled-components";
import Modal from "../../components/Modal/Modal";
import axios from "axios";
import GreatView from "../GreatView/GreatView";
import TerribleView from "../TerribleView/TerribleView";
import { BrowserRouter, Route } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class GeneratorView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      isModalOpen: false,
      joke: "Do you wanna hear a joke?",
      favourites: [],
    };
  }

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

  addToFavourites = () => {
    this.setState({
      favourites: [...this.state.favourites, this.state.joke],
    });
    alert(`${this.state.favourites}`);
  };
  render() {
    const { joke, id, isModalOpen } = this.state;

    return (
      <>
        <Header />
        <Joke key={id} text={joke} />
        <Wrapper>
          <ButtonStop fetchJoke={this.fetchRandomJoke} text="Ugh." />
          <ButtonFun
            fetchJoke={this.fetchRandomJoke}
            openModalFn={this.openModal}
            addToFavourites={this.addToFavourites}
            text="Yes"
          />
        </Wrapper>
        {isModalOpen && <Modal closeModalFn={this.closeModal} />}
      </>
    );
  }
}

export default GeneratorView;
