import React, { Component } from "react";
const ThemeContext = React.createContext();
export class ThemeProvider extends Component {
  state = {
    darkTheme: true,
  };

  toggleTheme = () => {
    this.setState((state) => ({ darkTheme: !state.darkTheme }));
  };
  render() {
    const { darkTheme } = this.state;
    const { toggleTheme } = this;
    return (
      <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;
