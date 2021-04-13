import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Home Page</h2>
        <h2>Context API examples with func and class components</h2>
      </div>
    );
  }
}
