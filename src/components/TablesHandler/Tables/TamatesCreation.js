import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import fetchApi from "../../../hooks/fetch";

export default function TeamateCreation() {
  const [name, setName] = useState(null);
  const [github_link, setGithub_link] = useState(null);

  const createTeamate = () => {
    fetchApi("/teamates", "POST", {
      name: name,
      github_link: github_link,
    }).then((res) => {
      console.log(res);
      alert(`You have created a client with the following fields:
      Teamate ID: ${res.id}
      Teamate Name: ${name}
      Teamate Github Link: ${github_link}`);
    });
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();
    confirmAlert({
      title: "New Teamate Creation",
      message: "Are you sure you want to create a new teamate?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            createTeamate();
          },
        },
        {
          label: "No",
          onClick: () => alert(`You can rethink about the New Teamate`),
        },
      ],
    });
  };
  const myChangeHandlerName = (event) => {
    setName(event.target.value);
  };
  const myChangeHandlerGithub = (event) => {
    setGithub_link(event.target.value);
  };

  return (
    <>
      <form onSubmit={(e) => mySubmitHandler(e)}>
        <h1>Hello Sebas, here you can add new teamates to the Client Table</h1>
        <p>Enter the required information, and submit:</p>
        <p>Teamate Name</p>
        <input type="text" onChange={(e) => myChangeHandlerName(e)} />
        <p>Teamate Github Link</p>
        <input type="text" onChange={(e) => myChangeHandlerGithub(e)} />
        <input type="submit" />
      </form>
    </>
  );
}
