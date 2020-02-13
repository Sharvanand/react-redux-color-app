import React, { Component } from "react";

import Home from "./components/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Color App</h3>
        <Home />
      </div>
    );
  }
}

export default App;
