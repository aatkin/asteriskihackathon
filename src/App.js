import React, { Component } from "react";
import { format, isAfter } from "date-fns";

import asteriskilogo from "./public/Asteriski_ry_logo_2017_kelt.png";
import reaktorlogo from "./public/Reaktor_Logo_NeonRed_RGB.png";
import "./App.css";

const events = [
  { name: "Event begins", startTime: new Date("Mar 29 2019 17:00:00 GMT+0200"), endTime: new Date("Mar 29 2019 17:59:59 GMT+0200") },
  { name: "Workshopping", startTime: new Date("Mar 29 2019 18:00:00 GMT+0200"), endTime: new Date("Mar 29 2019 19:29:59 GMT+0200") }
];

const isUpcomingEvent = event => isAfter(event.endTime, new Date());

const TimeView = props => (
  <div style={{ display: "flex", marginTop: "2em", justifyContent: "center" }}>
    <p style={{ color: "#FFF", fontSize: "32px" }}>{format(props.time, "HH.mm:ss")}</p>
  </div>
);

const Events = props => (
  <div style={{ display: "flex", marginTop: "2em", justifyContent: 'center' }}>
    <div style={{ display: "flex", flexDirection: "column" }}>
      {props.events.filter(isUpcomingEvent).map((event, index) => (
        <p key={index} style={{ color: "#FFF", fontSize: "24px", textAlign: 'left' }}>
          {event.name}
        </p>
      ))}
    </div>
    <div style={{ display: "flex", flexDirection: "column", marginLeft: '3em' }}>
      {props.events.filter(isUpcomingEvent).map((event, index) => (
        <p key={index + "i"} style={{ color: "#FFF", fontSize: "24px" }}>
          {format(event.startTime, "HH.mm:ss")}
        </p>
      ))}
    </div>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Date.now(),
      interval: window.setInterval(() => this.setState({ time: Date.now() }), 1000)
    };
  }

  componentWillUnmount() {
    window.clearTimeout(this.state.interval);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={asteriskilogo} className="App-logo" alt="logo" />
          <span style={{ color: "#FFFFFF", marginLeft: "1em" }}>X</span>
          <img src={reaktorlogo} style={{ marginLeft: "1em" }} className="App-logo" alt="logo" />
        </header>
        <TimeView time={this.state.time} />
        <Events events={events} />
      </div>
    );
  }
}

export default App;
