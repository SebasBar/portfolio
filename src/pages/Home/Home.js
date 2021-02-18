import React from "react";
import { useState, useEffect } from "react";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import "./home.css";
import fetchApi from "../../hooks/fetch";

export default function Home() {
  const [sebasInfo, setSebasInfo] = useState({});

  useEffect(() => {
    fetchApi("/sebasbar")
      .then((data) => {
        setSebasInfo(data);
        console.log(
          `this is the data ${data} ${data.first_name} ${data.last_name}`
        );
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <>
      <div className="site">
        <div className="presentation">
          <div className="greetings">
            <h1>Hi, I am</h1>
          </div>
          <div className="name">
            <AnimatedText textColor="#FF4136" overlayColor="#001f3f">
              {sebasInfo.first_name}
            </AnimatedText>
          </div>
          <div className="lastname">
            <AnimatedText textColor="#001f3f" overlayColor="#FF4136">
              {sebasInfo.last_name}
            </AnimatedText>
          </div>
          <div className="subtitle">
            <h1>full stack web developer</h1>
          </div>
        </div>
        <div className="stupid-info">
          <div className="info">
            This website is fetching information from a database, you can check
            more abou it in the section "About this Site" in the menu above ...
          </div>
        </div>
      </div>
    </>
  );
}
