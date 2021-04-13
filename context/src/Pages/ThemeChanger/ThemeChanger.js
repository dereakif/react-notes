import React, { Component } from "react";
import ToggleButton from "../../components/ThemeChanger/ToggleButton";
import ThemeBox from "../../components/ThemeChanger/ThemeBox";
import { ThemeProvider } from "../../contexts/ThemeContext";
export default class ThemeChanger extends Component {
  render() {
    return (
      <div
        style={{
          margin: "2rem auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ThemeProvider>
          <ToggleButton />
          <ThemeBox />
        </ThemeProvider>
      </div>
    );
  }
}
