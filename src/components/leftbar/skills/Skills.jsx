import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

export default class Skills extends Component {
  render() {
    const skills = this.props.data.sort((a, b) => b.order - a.order);
    return (
      <div className="skills">
        <span className="skill-heading"> Skills </span>
        <div className="skill-container">
          {skills.map(skill => {
            return (
              <div className="skill-row" key={skill.order}>
                <span className="skill-name">{skill.skill}</span>
                <LinearProgress
                  className="progress-bar"
                  variant="determinate"
                  value={skill.progress}
                />
              </div>
            );
          })}
          <div className="skill-row" />
        </div>
      </div>
    );
  }
}
