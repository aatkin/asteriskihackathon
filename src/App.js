import React, { Component } from "react";
import { format, isAfter, isWithinRange } from "date-fns";
import { compose, filter, take } from "ramda";
import asteriskilogo from "./public/Asteriski_ry_logo_2017_kelt.png";
import reaktorlogo from "./public/Reaktor_Logo_NeonRed_RGB.png";
import "./App.css";

import events from "./events.json";

const isUpcomingEvent = event => isAfter(event.endTime, new Date());
const getVisibleEvents = compose(
  take(3),
  filter(isUpcomingEvent)
);
const getEventClassName = event =>
  isWithinRange(Date.now(), event.startTime, event.endTime) ? "event event--active" : "event";

const Events = props => (
  <div className="App-events">
    <div className="App-events__eventNameContainer">
      {getVisibleEvents(props.events).map((event, index) => (
        <p key={index} style={{ textAlign: "left" }} className={getEventClassName(event)}>
          {event.name}
        </p>
      ))}
    </div>
    <div className="App-events__eventDateContainer">
      {getVisibleEvents(props.events).map((event, index) => (
        <p key={index + "i"} className={getEventClassName(event)}>
          {format(event.startTime, "HH.mm")}
        </p>
      ))}
    </div>
  </div>
);

const TimeView = props => (
  <div
    style={{
      display: "flex",
      margin: "2em 20vw 0 20vw",
      paddingBottom: "2em",
      borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
      flexDirection: "column",
      justifyContent: "center"
    }}
  >
    <p style={{ color: "#FFF", fontSize: "32px" }}>{format(props.time, "HH.mm:ss")}</p>
    <p style={{ color: "#FFF", fontSize: "24px", marginTop: 0 }}>
      {format(props.time, "dddd D.MM.")}
    </p>
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
          <span style={{ marginLeft: "1em" }}>X</span>
          <img src={reaktorlogo} className="App-logo" style={{ marginLeft: "1em" }} alt="logo" />
        </header>
        <TimeView time={this.state.time} />
        <Events events={events} />
      </div>
    );
  }
}

export default App;
