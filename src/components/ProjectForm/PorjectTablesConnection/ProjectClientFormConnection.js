import React, { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import fetchApi from "../../../hooks/fetch";

export default function ProjectClientFormConnection() {
  const [projectsInfo, setProjectsInfo] = useState([]);
  const [selectedProject, setSelectedProject] = useState([]);
  const [projectId, setProjectId] = useState();

  const [clientsInfo, setClientsInfo] = useState([]);
  const [selectedClient, setSelectedClient] = useState([]);
  const [clientId, setClientId] = useState(null);

  useEffect(() => {
    fetchApi("/projects")
      .then((data) => {
        setProjectsInfo(data);
        console.log(`${data}`);
      })
      .catch((err) => {
        console.log("error");
      });
    fetchApi("/clients")
      .then((data) => {
        setClientsInfo(data);
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
    fetchApi(`/clients/${clientId}`)
      .then((data) => {
        setSelectedClient(data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, [clientId]);

  const handleProjectId = (event) => {
    setProjectId(() => event.target.value);
  };

  const handleChangeClientId = (event) => {
    setClientId(() => event.target.value);
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
            connectClientProject();
          },
        },
        {
          label: "No",
          onClick: () => alert(`You can rethink about delete a Project`),
        },
      ],
    });
  };

  const connectClientProject = () => {
    fetchApi(`/projects/client/${projectId}`, "PUT", {
      clientId: Number(clientId),
    }).then((res) => {
      console.log(projectId);
      alert(`You connected the clientId: ${clientId} name: ${selectedClient.name} 
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
        <p>Here you can look for an specific client and then connect them</p>
        <p>Client Id</p>
        <select
          placeholder="Client"
          value={clientId}
          onChange={(e) => handleChangeClientId(e)}
        >
          <option>--Choose Client ID--</option>
          {clientsInfo.map((client, index) => {
            return <option key={index}>{client.id}</option>;
          })}
        </select>
        <p>Client Name</p>
        <textarea
          value={
            selectedClient.length === 0
              ? "Choose an ID first"
              : selectedClient.name
          }
        />
        <p>Client Description</p>
        <textarea
          value={
            selectedClient.length === 0
              ? "Choose an ID first"
              : selectedClient.description
          }
        />
        <input type="submit" label="connect" />
      </form>
    </>
  );
}
