import { useState, useEffect } from "react";
import fetchApi from "../../hooks/fetch";
import "./project.css";
import LittleCrushing from "../../pics/Projects/LittleCrushingCars/LittleCrushingCars.png";

export default function Projects() {
  const [projectsInfo, setProjectsInfo] = useState([]);

  useEffect(() => {
    fetchApi("/projects/")
      .then((data) => {
        console.log(data);
        setProjectsInfo(data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  let auxPic = [];

  return (
    <>
      <div className="space" />
      <div className="line" />
      <div className="title">Welcome to my Projects</div>
      <div className="line" />
      {projectsInfo.map((data, index) => {
        return (
          <>
            <div className="projects">
              <div className="name">{data.name}</div>
              <div className="description">Description:</div>
              <div className="data-description">{data.description}</div>
              {data.description2 != "" && (
                <div className="data-description">{data.description2}</div>
              )}
              {data.description3 != "" && (
                <div className="data-description">{data.description3}</div>
              )}

              {data.github_link != "" && (
                <a href={data.github_link} target="_blank">
                  link to Github repo
                </a>
              )}
              {data.deployed_link != "" && (
                <a href={data.deployed_link} target="_blank">
                  link to the website (or download file)
                </a>
              )}
              {(auxPic[index] = String(data.pictures[0].picture))}

              {console.log(data.pictures[0].picture)}

              <img
                className="picture"
                src="../../pics/Projects/LittleCrushingCars/LittleCrushingCars.png"
              />

              <ul>
                <div className="title">Languages:</div>
                {data.tech_lang.map((lang) => {
                  return (
                    <li className="languages">{`${lang.name}: ${lang.description}`}</li>
                  );
                })}
              </ul>
              {data.clients != "" && (
                <ul>
                  <h3>Clients:</h3>
                  {data.clients.map((client) => {
                    return (
                      <li className="clients">{`${client.name}, ${client.industry}, ${client.description}`}</li>
                    );
                  })}
                </ul>
              )}
              {data.teamates != "" && (
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
              )}
            </div>
          </>
        );
      })}
    </>
  );
}
