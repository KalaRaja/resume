import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";

export default class App extends Component {
  state = {
    name: "Shashank Shekhar",
    role: "Full Stack developer",
    about:
      "Quisque pulvinar sapien sit amet purus commodo pretium. Praesent venenatis nisl eget commodo mollis. Phasellus ullamcorper, urna nec venenatis ultricies, urna neque cursus arcu, vel mattis lorem magna luctus ligula. Suspendisse ornare faucibus velit ac venenatis. Ut ut suscipit lacus. Mauris quis dui mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec scelerisque, sapien vitae viverra efficitur, turpis nunc cursus felis, sit amet bibendum lacus ligula ac augue. Integer ut eros sollicitudin, cursus nunc nec, semper nisi. Donec finibus urna a dolor pellentesque tempor. Phasellus ut elit pellentesque, euismod quam eget, tristique dui. Curabitur consectetur tempor ultricies. Suspendisse semper porttitor velit, in porta risus porttitor nec. Vivamus id malesuada est. Nam nec mauris maximus, imperdiet mauris vitae, ultrices dui. Vestibulum volutpat velit eu eros posuere, ut dapibus metus laoreet.",
    skills: [
      { skill: "abc1", progress: 10, order: 1 },
      { skill: "abc2", progress: 20, order: 2 },
      { skill: "abc3", progress: 30, order: 3 },
      { skill: "abc4", progress: 40, order: 4 },
      { skill: "abc5", progress: 50, order: 5 }
    ],
    work: [
      {
        title: "Quisque pulvinar1",
        company: "amet purus commodo pretium",
        duration: ["01/02/2009", "02/01/2012"],
        order: 1,
        descriptionShort:
          "Quisque pulvinar sapien sit amet purus commodo pretium. Praesent venenatis nisl eget commodo mollis. Phasellus ullamcorper, urna nec venenatis ultricies, urna neque cursus arcu, vel mattis lorem magna luctus ligula. Suspendisse ornare faucibus velit ac venenatis. Ut ut suscipit lacus."
      },
      {
        title: "Quisque pulvinar2",
        company: "amet purus commodo pretium",
        duration: ["01/02/2009", "02/01/2012"],
        order: 1,
        descriptionShort:
          "Quisque pulvinar sapien sit amet purus commodo pretium. Praesent venenatis nisl eget commodo mollis. Phasellus ullamcorper, urna nec venenatis ultricies, urna neque cursus arcu, vel mattis lorem magna luctus ligula. Suspendisse ornare faucibus velit ac venenatis. Ut ut suscipit lacus."
      }
    ]
  };

  render() {
    return (
      <div className="app">
        <div className="app-wrapper">
          <Home data={this.state} />
        </div>
      </div>
    );
  }
}
