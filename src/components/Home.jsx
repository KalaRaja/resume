import React, { Component } from "react";
import Topbar from "./topbar/Topbar";
import Leftbar from "./leftbar/Leftbar";
import Content from "./content/Content";

export default class Home extends Component {
  render() {
    return (
      <div className="home wrapper">
        <Topbar data={this.props.data} />
        <div className="main-content-wrapper">
          <Leftbar data={this.props.data} />
          <Content data={this.props.data} />
        </div>
      </div>
    );
  }
}
