import React, { Component } from "react";
import Skills from "./skills/Skills";

export default class Leftbar extends Component {
  render() {
    const { skills } = this.props.data;
    return (
      <div className="leftbar">
        <Skills data={skills} />
      </div>
    );
  }
}
