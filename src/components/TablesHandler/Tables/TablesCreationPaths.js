import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import ClientCreation from "./ClientCreation";
import TeamatesCreation from "./TamatesCreation";
import TechlangCreation from "./TechlangCreation";

export default function TablesCreationPaths() {
  return (
    <>
      <Router>
        <nav className="menu">
          <NavLink
            to="/admin/tables/clientcreation"
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
            <h2 className="menu-link">Client Creation</h2>
          </NavLink>
          <NavLink
            to="/admin/tables/teamatecreation"
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
            <h2 className="menu-link">Teamate Creation</h2>
          </NavLink>
          <NavLink
            to="/admin/tables/techlangcreation"
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
            <h2 className="menu-link">Tech Lang Creation</h2>
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/admin/tables/clientcreation">
            <ClientCreation />
          </Route>
          <Route exact path="/admin/tables/teamatecreation">
            <TeamatesCreation />
          </Route>
          <Route exact path="/admin/tables/techlangcreation">
            <TechlangCreation />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
