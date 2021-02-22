import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import ProjectClientFormConnection from "../ProjectForm/PorjectTablesConnection/ProjectClientFormConnection";
import ProjectTechlangFormConnection from "../ProjectForm/PorjectTablesConnection/ProjectTechlangFormConnection";
import ProjectTeamateFormConnection from "../ProjectForm/PorjectTablesConnection/ProjectTeamatesFormConnection";

export default function ProjectFormConnection() {
  return (
    <Router>
      <nav className="menu">
        <NavLink
          to="/admin/projectconnection/clientproject"
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
          <h2 className="menu-link">Client-Project</h2>
        </NavLink>
        <NavLink
          to="/admin/projectconnection/techlangproject"
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
          <h2 className="menu-link">Techlang-Project</h2>
        </NavLink>
        <NavLink
          to="/admin/projectconnection/teamateproject"
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
          <h2 className="menu-link">Teamate-Project</h2>
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/admin/projectconnection/clientproject">
          <ProjectClientFormConnection />
        </Route>
        <Route exact path="/admin/projectconnection/techlangproject">
          <ProjectTechlangFormConnection />
        </Route>
        <Route exact path="/admin/projectconnection/teamateproject">
          <ProjectTeamateFormConnection />
        </Route>
      </Switch>
    </Router>
  );
}
