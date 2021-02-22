import React, { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import fetchApi from "../../hooks/fetch";

export default function ProjectFormDeletion(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [github_link, setGithub_link] = useState("");
  const [deployed_link, setDeployed_link] = useState("");
  const [projectsInfo, setProjectsInfo] = useState([]);
  const [selectedProject, setSelectedProject] = useState([]);
  const [projectId, setProjectId] = useState(-1);

  useEffect(() => {
    fetchApi("/projects")
      .then((data) => {
        setProjectsInfo(data);
        console.log(`${data}`);
        console.log(`selected project: ${selectedProject.length}`);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    fetchApi(`/projects/project/${projectId}`)
      .then((data) => {
        setSelectedProject(data);
        console.log(`${typeof data}`);
      })
      .catch((err) => {
        console.log("error");
      });
  }, [projectId]);

  const handleChangeUpdateProjectId = (event) => {
    setProjectId(() => event.target.value);
    // console.log("handleChangeUpdateProjectId");
  };

  const updateProject = () => {
    fetchApi(`/projects/project/${projectId}`, "PUT", {
      name: name,
      description: description,
      description2: description2,
      description3: description3,
      github_link: github_link,
      deployed_link: deployed_link,
    }).then((res) => {
      console.log(res);
      window.location.reload();
      alert(`You updated a project with the following fields:
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
      title: "Project Update",
      message: `Are you sure you want to update the Project`,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            updateProject();
          },
        },
        {
          label: "No",
          onClick: () => alert(`You can rethink about delete a Project`),
        },
      ],
    });
  };

  const myChangeHandlerName = (event) => {
    setName(event.target.value);
  };
  const myChangeHandlerDescription = (event) => {
    setDescription(event.target.value);
  };
  const myChangeHandlerDescription2 = (event) => {
    setDescription2(event.target.value);
  };
  const myChangeHandlerDescription3 = (event) => {
    setDescription3(event.target.value);
  };
  const myChangeHandlerGithubLink = (event) => {
    setGithub_link(event.target.value);
  };
  const myChangeHandlerDeployedLink = (event) => {
    setDeployed_link(event.target.value);
  };

  return (
    <form onSubmit={(e) => mySubmitHandler(e)}>
      <h1>Hello Sebas, here you can update any of your past projects</h1>
      <p>Enter the required information, and submit:</p>
      <p>Project Id</p>
      <select
        placeholder="Project"
        value={projectId}
        onChange={(e) => handleChangeUpdateProjectId(e)}
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
      <input type="text" onChange={(e) => myChangeHandlerName(e)} />
      <p>Project Description A</p>
      <textarea
        value={
          selectedProject.length === 0
            ? "Choose an ID first"
            : selectedProject.description
        }
      />
      <input type="text" onChange={(e) => myChangeHandlerDescription(e)} />
      <p>Project Description B</p>
      <textarea
        value={
          selectedProject.length === 0
            ? "Choose an ID first"
            : selectedProject.description2
        }
      />
      <input type="text" onChange={(e) => myChangeHandlerDescription2(e)} />
      <p>Project Description C</p>
      <textarea
        value={
          selectedProject.length === 0
            ? "Choose an ID first"
            : selectedProject.description3
        }
      />
      <input type="text" onChange={(e) => myChangeHandlerDescription3(e)} />
      <p>Github Link</p>
      <textarea
        value={
          selectedProject.length === 0
            ? "Choose an ID first"
            : selectedProject.github_link
        }
      />
      <input type="text" onChange={(e) => myChangeHandlerGithubLink(e)} />
      <p>Deployed Link</p>
      <textarea
        value={
          selectedProject.length === 0
            ? "Choose an ID first"
            : selectedProject.deployed_link
        }
      />
      <input type="text" onChange={(e) => myChangeHandlerDeployedLink(e)} />
      <input type="submit" label="update" />
    </form>
  );
}
