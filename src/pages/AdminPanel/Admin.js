import { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import ProjectFormCreation from "../../components/ProjectForm/ProjectFormCreation";
import ProjectFormDeletion from "../../components/ProjectForm/ProjectFormDelete";
import ProjectFormUpdate from "../../components/ProjectForm/ProjectFormUpdate";
import ProjectFormConnection from "../../components/ProjectForm/ProjectFormConnection";

export default function Admin() {
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    fetch("/sebasbar/credentials")
      .then((res) => res.json())
      .then((data) => {
        console.log(`Data received: ${data.user}`);
        setCredentials(data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <>
      <>
        <h1>Welcome to the Adminstrator Panel</h1>
        <h2>
          {credentials.user !== undefined
            ? "You have the cookie, so you can alter the DB"
            : "You don't have the cookie"}
        </h2>
        {credentials.user !== undefined ? (
          <Router>
            <nav className="menu">
              <NavLink
                to="/admin/projectcreation"
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
                <h2 className="menu-link">Create Project</h2>
              </NavLink>
              <NavLink
                to="/admin/projectupdate/"
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
                <h2 className="menu-link">Project Update</h2>
              </NavLink>
              <NavLink
                to="/admin/deleteproject/"
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
                <h2 className="menu-link">Delete Project</h2>
              </NavLink>
              <NavLink
                to="/admin/projectconnection"
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
                <h2 className="menu-link">Connect Projects and Tables</h2>
              </NavLink>
            </nav>
            <Switch>
              <Route exact path="/admin/projectcreation">
                <ProjectFormCreation />
              </Route>
              <Route exact path="/admin/projectupdate/">
                <ProjectFormUpdate />
              </Route>
              <Route exact path="/admin/deleteproject/">
                <ProjectFormDeletion />
              </Route>
              <Route exact path="/admin/projectconnection">
                <ProjectFormConnection />
              </Route>
            </Switch>
          </Router>
        ) : (
          <h1> You have to been Logged In</h1>
        )}
      </>
    </>
  );
}
