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
const getEventClassName = event => (isWithinRange(Date.now(), event.startTime, event.endTime) ? "event event--active" : "event");

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={asteriskilogo} className="App-logo" alt="logo" />
          <span style={{ marginLeft: "1em" }}>X</span>
          <img src={reaktorlogo} className="App-logo" style={{ marginLeft: "1em" }} alt="logo" />
        </header>
        <Events events={events} />
      </div>
    );
  }
}

export default App;
