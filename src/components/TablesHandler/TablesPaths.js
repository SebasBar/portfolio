import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import TablesCreationPaths from "./Tables/TablesCreationPaths";

export default function TablesPaths() {
  return (
    <>
      <Router>
        <nav className="menu">
          <NavLink
            to="/admin/tables/clients/menu/"
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
            <h2 className="menu-link">Client Table</h2>
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/admin/tables/clients/menu/">
            <TablesCreationPaths />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
