import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";

export default class Topbar extends Component {
  render() {
    const { name, role, about } = this.props.data;
    return (
      <div className="topbar wrapper">
        <div className="container">
          <div className="profile-container">
            <div className="name-role">
              <div className="name"> {name} </div>
              <div className="role"> {role} </div>
            </div>
            <div className="avatar-container">
              <Avatar src="/images/profile.jpg" className="avatar" />
            </div>
          </div>
          <div className="about">{about}</div>
        </div>
      </div>
    );
  }
}
