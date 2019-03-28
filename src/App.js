import React, { Component } from "react";
import asteriskilogo from "./public/Asteriski_ry_logo_2017_kelt.png";
import reaktorlogo from "./public/Reaktor_Logo_NeonRed_RGB.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={asteriskilogo} className="App-logo" alt="logo" />
          <span style={{ color: "#FFFFFF", marginLeft: "1em" }}>X</span>
          <img src={reaktorlogo} style={{ marginLeft: "1em" }} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
