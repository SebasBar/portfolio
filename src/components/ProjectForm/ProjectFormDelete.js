import React, { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import fetchApi from "../../hooks/fetch";

export default function ProjectFormDeletion(props) {
  const [projectsInfo, setProjectsInfo] = useState([]);
  const [projectDeleteId, setProjectDeleteId] = useState(null);
  const [projectDeleteName, setProjectDeleteName] = useState("Project Name");
  const [projectDeleteDescription, setProjectDeleteDescription] = useState(
    null
  );
  const [projectArrayIndex, setProjectArrayIndex] = useState(null);

  useEffect(() => {
    fetchApi("/projects")
      .then((data) => {
        setProjectsInfo(data);
        console.log(`${data}`);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    setProjectArrayIndex(
      projectsInfo.findIndex((std) => std.id === Number(projectDeleteId))
    );
  }, [projectDeleteId]);

  const handleChangeDeleteProjectId = (event) => {
    setProjectDeleteId(() => event.target.value);
  };

  const deleteProject = () => {
    fetchApi(`/projects/project/${projectDeleteId}`, "DELETE").then((res) => {
      console.log(res);
      fetchApi("/projects")
        .then((data) => {
          setProjectsInfo(data);
          console.log(`${data}`);
        })
        .catch((err) => {
          console.log("error");
        });
      window.location.reload();
      alert(`You deleted a project with the following fields:
      Project ID: ${res.id}
      Project Name: ${res.name}
      Project Description A: ${res.description} 
      Project Description B: ${res.description2}
      Project Description C: ${res.description3} 
      Github Link: ${res.github_link} 
      Deployed Link: ${res.deployed_link}`);
    });
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();
    confirmAlert({
      title: "Project Deletion",
      message: `Are you sure you want to delete the Project`,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteProject();
          },
        },
        {
          label: "No",
          onClick: () => alert(`You can rethink about delete a Project`),
        },
      ],
    });
  };

  return (
    <form onSubmit={(e) => mySubmitHandler(e)}>
      <h1>Hello Sebas, here you can delete any of your past projects</h1>
      <p>Enter the required information, and submit:</p>
      <p>Project Id</p>
      <select
        placeholder="Project"
        value={projectDeleteId}
        onChange={(e) => handleChangeDeleteProjectId(e)}
      >
        <option>--Choose Project ID--</option>
        {projectsInfo.map((project, index) => {
          return <option key={index}>{project.id}</option>;
        })}
      </select>
      <p>Project Name</p>
      <textarea
        value={
          projectsInfo[projectArrayIndex] === undefined
            ? "Choose an ID first"
            : projectsInfo[projectArrayIndex].name
        }
      />
      <p>Project Description</p>
      <textarea
        value={
          projectsInfo[projectArrayIndex] === undefined
            ? "Choose an ID first"
            : projectsInfo[projectArrayIndex].description
        }
      />
      <input type="submit" label="delete" />
    </form>
  );
}
