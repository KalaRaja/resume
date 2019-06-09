import React, { Component } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import uuid from "uuid";

export default class Content extends Component {
  state = {
    tabs: ["Work", "Projects"],
    activeTabIndex: 0,
    data: this.props.data
  };
  handleChange = (e, v) => {
    this.setState({ activeTabIndex: v });
  };

  render() {
    return (
      <div className="content">
        <div className="tab-container">
          <div className="tab-header">
            <Tabs
              value={this.state.activeTabIndex}
              onChange={this.handleChange}
            >
              {this.state.tabs.map(t => (
                <Tab label={t} key={uuid.v4()} />
              ))}
            </Tabs>
          </div>
          <div className="tab-content" />
        </div>
      </div>
    );
  }
}
