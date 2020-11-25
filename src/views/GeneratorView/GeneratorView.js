import React from "react";
import Header from "../../components/Header/Header";
import Joke from "../../components/Joke/Joke";
import ButtonFun from "../../components/Buttons/ButtonFun";
import ButtonStop from "../../components/Buttons/ButtonStop";
import styled from "styled-components";
import Modal from "../../components/Modal/Modal";
import axios from "axios";
import ListOfJokes from "../../components/ListOfJokes/ListOfJokes";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class GeneratorView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
      userName: "Stas",
    };
  }
  componentDidMount() {
    document.title = "👴👔👖DadJoker";
    const localStorageRef = localStorage.getItem(this.state.userName);
    console.log(localStorageRef);

    if (localStorageRef) {
      this.setState({ favourites: localStorageRef.split(",") });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(this.state.userName, this.state.favourites);
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
        this.setState({ joke: res["data"]["joke"], jokeId: res["data"]["id"] });
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
  };
  render() {
    const { joke, id, isModalOpen } = this.state;

    return (
      <>
        <Header />
        <Joke key={id} text={joke ? joke : "Do you wanna hear a joke?"} />
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
        <ListOfJokes favJokes={this.state.favourites} />
      </>
    );
  }
}

export default GeneratorView;
