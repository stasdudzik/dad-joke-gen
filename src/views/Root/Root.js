import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GeneratorView from "../GeneratorView/GeneratorView";
import GreatView from "../GreatView/GreatView";
import TerribleView from "../TerribleView/TerribleView";
import Navigation from "../../components/Navigation/Navigation";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navigation />
          <Switch>
            <Route exact path="/" component={GeneratorView} />
            <Route path="/great" component={GreatView} />
            <Route path="/terrible" component={TerribleView} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Root;
