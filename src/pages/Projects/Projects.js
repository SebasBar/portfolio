import { useState, useEffect } from "react";
import fetchApi from "../../hooks/fetch";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./project.css";

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

  return (
    <>
      <div className="space" />
      <div className="line" />
      <div className="title">Welcome to my Projects</div>
      <div className="line" />
      <div className="projects">
        {projectsInfo.map((info, index) => {
          return <ProjectCard className="pcard" data={info} />;
        })}
      </div>
    </>
  );
}
