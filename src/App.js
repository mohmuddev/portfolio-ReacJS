import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import { Component } from "react";
import Fullscreen from "./Components/Sections/fullscreen/Fullscreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Fullscreen />
        <section className="divider"></section>
        {/* other components */}
        <br />
        <br />
      </div>
    );
  }
}

export default App;
