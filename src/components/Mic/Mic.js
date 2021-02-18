import { useSpeechRecognition } from "react-speech-kit";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Projects from "../../pages/Projects/Projects";
import Home from "../../pages/Home/Home";
import AboutThis from "../../pages/AboutThis/AboutThis";
import AboutMe from "../../pages/AboutMe/AboutMe";
import Admin from "../../pages/AdminPanel/Admin";
import Login from "../../pages/Login/Login";

export default function Mic() {
  const [startStop, setStartStop] = useState(true);

  const history = useHistory();

  const onResult = (result) => {
    console.log(result);
    if (result.includes("project" || "Project" || "projects" || "Projects")) {
      console.log(`The word "project" was recognized: ${result}`);
      stop();
      history.push("/projects");
    }
    if (result.includes("about this site" || "About this site")) {
      // history.push("/projects");
      console.log(`The phrase "about this site" was recognized: ${result}`);
      stop();
      history.push("/aboutthis");
    }
    if (result.includes("about me" || "About me")) {
      // history.push("/projects");
      console.log(`The phrase "about me" was recognized: ${result}`);
      stop();
      history.push("/aboutme");
    }
    if (result.includes("administrador" || "Administrador")) {
      // history.push("/projects");
      console.log(`The word "administrador" was recognized: ${result}`);
      stop();
      history.push("/admin");
    }
    if (result.includes("login" || "Login")) {
      // history.push("/projects");
      console.log(`The word "login" was recognized: ${result}`);
      stop();
      history.push("/login");
    }
    if (result.includes("home" || "Home")) {
      // history.push("/projects");
      console.log(`The word "home" was recognized: ${result}`);
      stop();
      history.push("/");
    }
  };

  const { listen, stop } = useSpeechRecognition({
    onResult,
  });

  const micActivation = () => {
    if (startStop === true) {
      listen();
      setStartStop(!startStop);
    } else {
      stop();
      setStartStop(!startStop);
    }
  };

  return (
    <>
      <div>
        <button onClick={micActivation}>🎤</button>
      </div>
    </>
  );
}
