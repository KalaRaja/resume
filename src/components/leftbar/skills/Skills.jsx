import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

export default class Skills extends Component {
  render() {
    const skills = this.props.data;
    return (
      <div className="skills">
        <span> Skills </span>
        <div className="skill-container">
          {skills.map(skill => {
            return (
              <div className="skill-row" key={skill.order}>
                <span className="skill-name">{skill.skill}</span>
                <LinearProgress variant="determinate" value={skill.progress} />
              </div>
            );
          })}
          <div className="skill-row" />
        </div>
      </div>
    );
  }
}
