import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import fetchApi from "../../hooks/fetch";

export default function ProjectFormCreation() {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [description2, setDescription2] = useState(null);
  const [description3, setDescription3] = useState(null);
  const [github_link, setGithub_link] = useState(null);
  const [deployed_link, setDeployed_link] = useState(null);

  const createProject = () => {
    fetchApi("/projects", "POST", {
      name: name,
      description: description,
      description2: description2,
      description3: description3,
      github_link: github_link,
      deployed_link: deployed_link,
    }).then((res) => {
      console.log(res);
      window.location.reload();
      alert(`You have created a project with the following fields:
      Project ID: ${res.id}
      Project Name: ${name}
      Project Description A: ${description} 
      Project Description B: ${description2}
      Project Description C: ${description3} 
      Github Link: ${github_link} 
      Deployed Link: ${deployed_link}`);
    });
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();
    confirmAlert({
      title: "New Project Creation",
      message: "Are you sure you want to create a new project?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            createProject();
          },
        },
        {
          label: "No",
          onClick: () => alert(`You can rethink about the New Project`),
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
      <h1>Hello Sebas, here you can add your past projects</h1>
      <p>Enter the required information, and submit:</p>
      <p>Project Name</p>
      <input type="text" onChange={(e) => myChangeHandlerName(e)} />
      <p>Project Description A</p>
      <input type="text" onChange={(e) => myChangeHandlerDescription(e)} />
      <p>Project Description B</p>
      <input type="text" onChange={(e) => myChangeHandlerDescription2(e)} />
      <p>Project Description C</p>
      <input type="text" onChange={(e) => myChangeHandlerDescription3(e)} />
      <p>Github Link</p>
      <input type="text" onChange={(e) => myChangeHandlerGithubLink(e)} />
      <p>Deployed Link</p>
      <input type="text" onChange={(e) => myChangeHandlerDeployedLink(e)} />
      <input type="submit" />
    </form>
  );
}
