import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todo from "./Pages/Todo/Todo";
import "./App.css";
import ThemeChanger from "./Pages/ThemeChanger/ThemeChanger";
import Home from "./Pages/Home/Home";

export default function App() {
  return (
    <Router>
      <div>
        <nav
          style={{
            display: "flex",
            backgroundColor: "black",
            justifyContent: "space-around",
          }}
        >
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{
              backgroundColor: "black",
              color: "white",
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
            to="/todo"
          >
            Todo (functional comp.)
          </Link>
          <Link
            to="/themechanger"
            style={{
              backgroundColor: "black",
              color: "white",
              textDecoration: "none",
              fontSize: "1.5rem",
            }}
          >
            Theme Changer (class comp.)
          </Link>
        </nav>

        <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/themechanger">
            <ThemeChanger />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
