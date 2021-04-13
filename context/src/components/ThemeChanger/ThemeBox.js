import { Component } from "react";
import ThemeContext from "../../contexts/ThemeContext";

class ThemeBox extends Component {
  render() {
    const { darkTheme } = this.context;
    return (
      <div
        style={{
          height: "200px",
          width: "200px",
          border: "1px solid black",
          backgroundColor: darkTheme ? "black" : "white",
          color: darkTheme ? "white" : "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Theme {darkTheme ? "Dark" : "White"}
      </div>
    );
  }
}
ThemeBox.contextType = ThemeContext;
export default ThemeBox;
