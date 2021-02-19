import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./Menu.css";

import Projects from "../../pages/Projects/Projects";
import Home from "../../pages/Home/Home";
import AboutThis from "../../pages/AboutThis/AboutThis";
import AboutMe from "../../pages/AboutMe/AboutMe";
import Admin from "../../pages/AdminPanel/Admin";
import Login from "../../pages/Login/Login";
import Mic from "../../components/Mic/Mic";

export default function Menu() {
  return (
    <Router>
      <div className="menu-mic">
        <nav className="menu">
          <NavLink
            to="/projects"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration: "underline",
            }}
            style={{
              textDecoration: "none",
              color: "#001f3f",
              fontFamily: "Raleway, sans-serif",
            }}
          >
            <h2 className="menu-link">Projects</h2>
          </NavLink>
          <NavLink
            to="/aboutthis"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration: "underline",
            }}
            style={{
              textDecoration: "none",
              color: "#001f3f",
              fontFamily: "Raleway, sans-serif",
            }}
          >
            <h2 className="menu-link">About this Site</h2>
          </NavLink>
          <NavLink
            to="/aboutme"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
              textDecoration: "underline",
            }}
            style={{
              textDecoration: "none",
              color: "#001f3f",
              fontFamily: "Raleway, sans-serif",
            }}
          >
            <h2 className="menu-link">About Me</h2>
          </NavLink>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "#001f3f",
              fontFamily: "Raleway, sans-serif",
            }}
          >
            <h2 className="menu-link">Home</h2>
          </NavLink>
        </nav>
        <div className="mic">
          <Mic />
        </div>
      </div>
      <Switch>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/aboutthis">
          <AboutThis />
        </Route>
        <Route exact path="/aboutme">
          <AboutMe />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
