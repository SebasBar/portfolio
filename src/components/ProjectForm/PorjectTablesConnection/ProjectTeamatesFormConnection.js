import React, { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import fetchApi from "../../../hooks/fetch";

export default function ProjectTechlangFormConnection() {
  const [projectsInfo, setProjectsInfo] = useState([]);
  const [selectedProject, setSelectedProject] = useState([]);
  const [projectId, setProjectId] = useState();

  const [teamatesInfo, setTeamatesInfo] = useState([]);
  const [selectedTeamate, setsetSelectedTeamate] = useState([]);
  const [teamateId, setTeamateId] = useState(null);

  useEffect(() => {
    fetchApi("/projects")
      .then((data) => {
        setProjectsInfo(data);
        console.log(`${data}`);
      })
      .catch((err) => {
        console.log("error");
      });
    fetchApi("/techlangs")
      .then((data) => {
        setTeamatesInfo(data);
        console.log(`${data}`);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    fetchApi(`/projects/project/${projectId}`)
      .then((data) => {
        setsetSelectedTeamate(data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, [projectId]);

  useEffect(() => {
    fetchApi(`/teamates/${teamateId}`)
      .then((data) => {
        setsetSelectedTeamate(data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, [teamateId]);

  const handleProjectId = (event) => {
    setProjectId(() => event.target.value);
  };

  const handleChangeTeamate = (event) => {
    setTeamateId(() => event.target.value);
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();
    confirmAlert({
      title: "Project Update",
      message: `Are you sure you want to update the Project`,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            connectTeamateProject();
          },
        },
        {
          label: "No",
          onClick: () =>
            alert(`You can rethink about connect Tech Lang with a Project`),
        },
      ],
    });
  };

  const connectTeamateProject = () => {
    fetchApi(`/projects/teamate/${projectId}`, "PUT", {
      teamateId: Number(teamateId),
    }).then((res) => {
      console.log(projectId);
      alert(`You connected the teamateId: ${teamateId} name: ${selectedTeamate.name} 
      with the project ID: ${projectId}`);
    });
  };

  return (
    <>
      <form>
        <h1>Here you can connect the projects with the rest of the tables</h1>
        <p>Here you can look for an specific project</p>
        <p>Project Id</p>
        <select
          placeholder="Project"
          value={projectId}
          onChange={(e) => handleProjectId(e)}
        >
          <option>--Choose Project ID--</option>
          {projectsInfo.map((project, index) => {
            return <option key={index}>{project.id}</option>;
          })}
        </select>
        <p>Project Name</p>
        <textarea
          value={
            selectedProject.length === 0
              ? "Choose an ID first"
              : selectedProject.name
          }
        />
        <p>Project Description</p>
        <textarea
          value={
            selectedProject.length === 0
              ? "Choose an ID first"
              : selectedProject.description
          }
        />
      </form>
      <form onSubmit={(e) => mySubmitHandler(e)}>
        <p>Here you can look for an specific teamate and then connect them</p>
        <p>Teamate Id</p>
        <select
          placeholder="Teamate"
          value={teamateId}
          onChange={(e) => handleChangeTeamate(e)}
        >
          <option>--Choose Teamate ID--</option>
          {teamatesInfo.map((teamate, index) => {
            return <option key={index}>{teamate.id}</option>;
          })}
        </select>
        <p>Teamate Name</p>
        <textarea
          value={
            selectedTeamate.length === 0
              ? "Choose an ID first"
              : selectedTeamate.name
          }
        />
        <p>Teamate Github Link</p>
        <textarea
          value={
            selectedTeamate.length === 0
              ? "Choose an ID first"
              : selectedTeamate.github_link
          }
        />
        <input type="submit" label="connect" />
      </form>
    </>
  );
}
