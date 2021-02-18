import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <nav className="menu">
        <Link
          to="/projects"
          style={{
            textDecoration: "none",
            color: "#001f3f",
            fontFamily: "Raleway, sans-serif",
          }}
        >
          <h2>Projects</h2>
        </Link>
        <Link
          to="/aboutthis"
          style={{
            textDecoration: "none",
            color: "#001f3f",
            fontFamily: "Raleway, sans-serif",
          }}
        >
          <h2>About this Site</h2>
        </Link>
        <Link
          to="/aboutme"
          style={{
            textDecoration: "none",
            color: "#001f3f",
            fontFamily: "Raleway, sans-serif",
          }}
        >
          <h2>About Me</h2>
        </Link>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#001f3f",
            fontFamily: "Raleway, sans-serif",
          }}
        >
          <h2>Home</h2>
        </Link>
      </nav>

      <Mic />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
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
      </Switch>
    </Router>
  );
}
