import { useState, useEffect } from "react";
import fetchApi from "../../hooks/fetch";

export default function Projects() {
  const [projectsInfo, setProjectsInfo] = useState([]);

  useEffect(() => {
    fetchApi("/sebasbar/projects")
      .then((data) => {
        console.log(data);
        setProjectsInfo(data);
        projectsInfo.map((data) => console.log(data.pictures.picture));
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <>
      <h1>Projects:</h1>

      {projectsInfo.map((data, index) => {
        return (
          <>
            <h2>{data.name}</h2>
            <h3>Description:</h3>
            <p>{data.description}</p>
            <a href={data.github_link}>link to Github repo</a>
            <br />
            <br />
            <a href={data.deployed_link}>link to the website</a>
            <img src={data.pictures.picture} />
            <ul>
              <h3>Languages:</h3>
              {data.tech_lang.map((lang) => {
                return <li>{`${lang.name}: ${lang.description}`}</li>;
              })}
            </ul>
            <ul>
              <h3>Clients:</h3>
              {data.clients.map((client) => {
                return (
                  <li>{`${client.name}, ${client.industry}, ${client.description}`}</li>
                );
              })}
            </ul>
            <ul>
              <h3>Colaborators:</h3>
              {data.teamates.map((teamate) => {
                return (
                  <>
                    <li>
                      {`${teamate.name}:`}
                      <a
                        href={teamate.github_link}
                      >{` link to ${teamate.name} Github repo`}</a>
                    </li>
                    <br />
                  </>
                );
              })}
            </ul>
          </>
        );
      })}
    </>
  );
}
