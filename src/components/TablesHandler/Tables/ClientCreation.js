import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import fetchApi from "../../../hooks/fetch";

export default function ClientCreation() {
  const [name, setName] = useState(null);
  const [industry, setIndustry] = useState(null);
  const [description, setDescription] = useState(null);

  const createClient = () => {
    fetchApi("/clients", "POST", {
      name: name,
      industry: industry,
      description: description,
    }).then((res) => {
      console.log(res);
      alert(`You have created a client with the following fields:
      Client ID: ${res.id}
      Client Name: ${name}
      Client Industry: ${industry}
      Client A: ${description} `);
    });
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();
    confirmAlert({
      title: "New Client Creation",
      message: "Are you sure you want to create a new client?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            createClient();
          },
        },
        {
          label: "No",
          onClick: () => alert(`You can rethink about the New Client`),
        },
      ],
    });
  };
  const myChangeHandlerName = (event) => {
    setName(event.target.value);
  };
  const myChangeHandlerIndustry = (event) => {
    setIndustry(event.target.value);
  };
  const myChangeHandlerDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <form onSubmit={(e) => mySubmitHandler(e)}>
        <h1>Hello Sebas, here you can add new clients to the Client Table</h1>
        <p>Enter the required information, and submit:</p>
        <p>Client Name</p>
        <input type="text" onChange={(e) => myChangeHandlerName(e)} />
        <p>Client Industry</p>
        <input type="text" onChange={(e) => myChangeHandlerIndustry(e)} />
        <p>Project Description</p>
        <input type="text" onChange={(e) => myChangeHandlerDescription(e)} />
        <input type="submit" />
      </form>
    </>
  );
}
