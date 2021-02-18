import { useState, useEffect } from "react";
import { TextInputMain, Item } from "../../components/Input/Input";
import fetchApi from "../../hooks/fetch";

export default function Admin() {
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    fetch("/sebasbar/credentials")
      .then((res) => res.json())
      .then((data) => {
        console.log(`Data recieved: ${data.user}`);
        setCredentials(data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <>
      <h1>Admin</h1>
      <h2>Your Credentials are:</h2>
      <h2>{`user: ${credentials.user} password: ${credentials.password}`}</h2>
    </>
  );
}
