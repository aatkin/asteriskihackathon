import React, { Component } from "react";
import { format, isAfter, isWithinRange } from "date-fns";
import { compose, filter, take } from "ramda";

import asteriskilogo from "./public/Asteriski_ry_logo_2017_kelt.png";
import reaktorlogo from "./public/Reaktor_Logo_NeonRed_RGB.png";
import "./App.css";

const events = [
  { name: "Event begins", startTime: new Date("Mar 29 2019 18:00:00 GMT+0200"), endTime: new Date("Mar 29 2019 18:14:59 GMT+0200") },
  { name: "Workshopping", startTime: new Date("Mar 29 2019 18:15:00 GMT+0200"), endTime: new Date("Mar 29 2019 19:44:59 GMT+0200") },
  { name: "Break", startTime: new Date("Mar 29 2019 19:45:00 GMT+0200"), endTime: new Date("Mar 29 2019 19:59:59 GMT+0200") },
  { name: "Workshopping", startTime: new Date("Mar 29 2019 20:00:00 GMT+0200"), endTime: new Date("Mar 29 2019 20:29:59 GMT+0200") },
  {
    name: "Playtime over. Hackathon begins!",
    startTime: new Date("Mar 29 2019 20:30:00 GMT+0200"),
    endTime: new Date("Mar 30 2019 08:59:59 GMT+0200")
  },
  { name: "Breakfast", startTime: new Date("Mar 30 2019 09:00:00 GMT+0200"), endTime: new Date("Mar 30 2019 09:59:59 GMT+0200") },
  {
    name: "First rounds of demo",
    startTime: new Date("Mar 30 2019 12:00:00 GMT+0200"),
    endTime: new Date("Mar 30 2019 12:59:59 GMT+0200")
  },
  { name: "Lunch", startTime: new Date("Mar 30 2019 13:30:00 GMT+0200"), endTime: new Date("Mar 30 2019 14:29:59 GMT+0200") },
  {
    name: "Second rounds of demo",
    startTime: new Date("Mar 30 2019 18:00:00 GMT+0200"),
    endTime: new Date("Mar 30 2019 18:59:59 GMT+0200")
  },
  { name: "Dinner (around this time)", startTime: new Date("Mar 30 2019 19:45:00 GMT+0200"), endTime: new Date("Mar 30 2019 20:14:59 GMT+0200") },
  {
    name: "Finish. Hackathon is over!",
    startTime: new Date("Mar 30 2019 20:30:00 GMT+0200"),
    endTime: new Date("Mar 30 2019 23:59:59 GMT+0200")
  }
];

const isUpcomingEvent = event => isAfter(event.endTime, new Date());
const getVisibleEvents = compose(
  take(3),
  filter(isUpcomingEvent)
);
const getEventClassName = event => (isWithinRange(Date.now(), event.startTime, event.endTime) ? "event event--active" : "event");

const TimeView = props => (
  <div style={{ display: "flex", margin: "2em 20vw 0 20vw", paddingBottom: '2em', borderBottom: '1px solid rgba(255, 255, 255, 0.4)', flexDirection: "column", justifyContent: "center" }}>
    <p style={{ color: "#FFF", fontSize: "32px" }}>{format(props.time, "HH.mm:ss")}</p>
    <p style={{ color: "#FFF", fontSize: "24px", marginTop: 0 }}>{format(props.time, "dddd D.MM.")}</p>
  </div>
);

const Events = props => (
  <div style={{ display: "flex", marginTop: "2em", justifyContent: "center" }}>
    <div style={{ display: "flex", flexDirection: "column" }}>
      {getVisibleEvents(props.events).map((event, index) => (
        <p key={index} style={{ textAlign: "left" }} className={getEventClassName(event)}>
          {event.name}
        </p>
      ))}
    </div>
    <div style={{ display: "flex", flexDirection: "column", marginLeft: "3em" }}>
      {getVisibleEvents(props.events).map((event, index) => (
        <p key={index + "i"} className={getEventClassName(event)}>
          {format(event.startTime, "HH.mm")}
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
