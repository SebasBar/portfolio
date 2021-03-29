import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import fetchApi from "../../../hooks/fetch";

export default function ClientCreation() {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);

  const createTechlang = () => {
    fetchApi("/techlangs", "POST", {
      name: name,
      description: description,
    }).then((res) => {
      console.log(res);
      alert(`You have created a client with the following fields:
      Tech Lang ID: ${res.id}
      Tech Lang Name: ${name}
      Tech Lang: ${description} `);
    });
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();
    confirmAlert({
      title: "New Tech Lang Creation",
      message: "Are you sure you want to create a new Tech Lang?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            createTechlang();
          },
        },
        {
          label: "No",
          onClick: () => alert(`You can rethink about the New Tech Lang`),
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

  return (
    <>
      <form onSubmit={(e) => mySubmitHandler(e)}>
        <h1>Hello Sebas, here you can add new Tech Lang to the Client Table</h1>
        <p>Enter the required information, and submit:</p>
        <p>Tech Lang Name</p>
        <input type="text" onChange={(e) => myChangeHandlerName(e)} />
        <p>Tech Lang Description</p>
        <input type="text" onChange={(e) => myChangeHandlerDescription(e)} />
        <input type="submit" />
      </form>
    </>
  );
}
