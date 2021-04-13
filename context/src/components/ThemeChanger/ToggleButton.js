import { Component } from "react";
import ThemeContext from "../../contexts/ThemeContext";

class ToggleButton extends Component {
  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Change Theme</button>;
  }
}
ToggleButton.contextType = ThemeContext;
export default ToggleButton;
