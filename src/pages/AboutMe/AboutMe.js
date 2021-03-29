import { useState, useEffect } from "react";
import fetchApi from "../../hooks/fetch";
import "./AboutMe.css";
import PDFRender from "../../components/PDFRender/PDFrender";
import CVSebas from "./SebastianBarckhahnResume.pdf";

export default function AboutMe() {
  const [sebasInfo, setSebasInfo] = useState([]);

  useEffect(() => {
    fetchApi("/sebasbar")
      .then((data) => {
        setSebasInfo(data);
        console.log(
          `this is the data ${data.first_name} ${data.last_name} ${data.phones[0].number}`
        );
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <>
      <h1>
        I am Web Developer with experience in both front and back end, including
        practical experience. I have participate and developed different
        projects that you can see in the "projects" section of this website. My
        former background is in electrical engineering with over seven years of
        experience in this field. I am a curious, critical and a creative person
        with experience in different fields, with passion for physics,
        artificial inteligence, music and videogames. Here you can visualize my
        CV and even download it with this pdf reader that I created using
        react-pdf and a completly custom made panel.
      </h1>
      <h1>
        I have knowledge in HTML5, CSS3 (Bootstrap, Material UI), Javascript
        ES6+, React, Redux, Node.js, Express, Databases (SQL, MySQL,
        PostgreSQL), REST API, JWT, Git / GitHub, Unix, Unix Terminal and Agile
        methodologies (Scrum, Sprint Planning, User Stories) among others
        working in front and back end.
      </h1>
      {/* <h1>About me .... </h1> */}
      <div className="pdf">
        <PDFRender pdfFile={CVSebas} />
      </div>
      {/* <h2>{`for example, this is my name: ${sebasInfo.first_name} ${sebasInfo.last_name} .... and if you want you can check my github page here:`}</h2>
      <p>{sebasInfo.picture}</p>
      {
        <ul>
          {sebasInfo.phones === undefined
            ? ""
            : sebasInfo.phones.map((phone) => {
                return <li>{phone.number}</li>;
              })}
        </ul>
      }
      {sebasInfo.emails === undefined
        ? ""
        : sebasInfo.emails.map((phone) => {
            return (
              <>
                <p>{`${phone.id} ${phone.address}`}</p>
              </>
            );
          })}

      <a href={sebasInfo.github_page}>link to my repo :)</a> */}
    </>
  );
}
