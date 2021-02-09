import { useState, useEffect } from "react";
import fetchApi from "../../hooks/fetch";

export default function Projects() {
  const [sebasInfo, setSebasInfo] = useState([]);

  useEffect(() => {
    fetchApi("http://localhost:8000/sebasbar/")
      .then((data) => {
        setSebasInfo(data);
        console.log(`this is the data ${data.first_name} ${data.last_name}`);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <>
      <h1>About me .... </h1>
      <h2>{`for example, this is my name: ${sebasInfo.first_name} ${sebasInfo.last_name} .... and if you want you can check my github page here:`}</h2>
      <a href={sebasInfo.github_page}>link to my repo :)</a>
    </>
  );
}
