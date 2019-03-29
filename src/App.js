import React, { Component } from "react";
import asteriskilogo from "./public/Asteriski_ry_logo_2017_kelt.png";
import reaktorlogo from "./public/Reaktor_Logo_NeonRed_RGB.png";
import "./App.css";

import events from "./events.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={asteriskilogo} className="App-logo" alt="logo" />
          <span style={{ marginLeft: "1em" }}>X</span>
          <img src={reaktorlogo} className="App-logo" style={{ marginLeft: "1em" }} alt="logo" />
        </header>
        <div className="App-events">
          {events.map((event, index) => (
            <p key={index}>
              {event.name} {event.startTime} {event.endTime}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
