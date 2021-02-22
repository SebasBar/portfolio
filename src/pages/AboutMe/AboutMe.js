import { useState, useEffect } from "react";
import fetchApi from "../../hooks/fetch";

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
      <h1>About me .... </h1>
      <h2>{`for example, this is my name: ${sebasInfo.first_name} ${sebasInfo.last_name} .... and if you want you can check my github page here:`}</h2>
      <p>{sebasInfo.picture}</p>
      {/* <p>{sebasInfo.phones[0].number}</p> */}

      {/* <ul>
        {sebasInfo.phones.map((phone) => {
          return <li>phone.number</li>;
        })}
      </ul> */}
      {/* <p>{sebasInfo.emails.number}</p> */}
      {/* {sebasInfo.emails.map((phone) => {
        return (
          <>
            <p>{phone.id}</p>
            <p>{phone.address}</p>
          </>
        );
      })} */}
      {/* <p>{sebasInfo.phones.number}</p> */}
      {/* <p>{sebasInfo.emails[0].address}</p> */}
      {/* <p>{sebasInfo.social_networks}</p> */}
      {/* <p>{sebasInfo.special_knowledge[0].name}</p>
      <p>{sebasInfo.work_experience[0].position}</p>
      <p>{sebasInfo.projects[0].description}</p> */}

      <a href={sebasInfo.github_page}>link to my repo :)</a>
    </>
  );
}
