import React, { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import fetchApi from "../../../hooks/fetch";

export default function ProjectTechlangFormConnection() {
  const [projectsInfo, setProjectsInfo] = useState([]);
  const [selectedProject, setSelectedProject] = useState([]);
  const [projectId, setProjectId] = useState();

  const [techlangsInfo, setTechlangsInfo] = useState([]);
  const [selectedTechlang, setsetSelectedTechlang] = useState([]);
  const [techlangId, setTechlangId] = useState(null);

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
        setTechlangsInfo(data);
        console.log(`${data}`);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    fetchApi(`/projects/project/${projectId}`)
      .then((data) => {
        setSelectedProject(data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, [projectId]);

  useEffect(() => {
    fetchApi(`/techlangs/${techlangId}`)
      .then((data) => {
        setsetSelectedTechlang(data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, [techlangId]);

  const handleProjectId = (event) => {
    setProjectId(() => event.target.value);
  };

  const handleChangeTechLangId = (event) => {
    setTechlangId(() => event.target.value);
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
            connectTechlangProject();
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

  const connectTechlangProject = () => {
    fetchApi(`/projects/techlang/${projectId}`, "PUT", {
      techLangId: Number(techlangId),
    }).then((res) => {
      console.log(projectId);
      alert(`You connected the clientId: ${techlangId} name: ${selectedTechlang.name} 
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
        <p>Here you can look for an specific techlang and then connect them</p>
        <p>Tech Lang Id</p>
        <select
          placeholder="Techlang"
          value={techlangId}
          onChange={(e) => handleChangeTechLangId(e)}
        >
          <option>--Choose Client ID--</option>
          {techlangsInfo.map((techlang, index) => {
            return <option key={index}>{techlang.id}</option>;
          })}
        </select>
        <p>Techlang Name</p>
        <textarea
          value={
            selectedTechlang.length === 0
              ? "Choose an ID first"
              : selectedTechlang.name
          }
        />
        <p>TechLang Description</p>
        <textarea
          value={
            selectedTechlang.length === 0
              ? "Choose an ID first"
              : selectedTechlang.description
          }
        />
        <input type="submit" label="connect" />
      </form>
    </>
  );
}
