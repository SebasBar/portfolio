import React from "react";
import { useState, useEffect } from "react";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import "./home.css";
import fetchApi from "../../hooks/fetch";

export default function Home() {
  const [sebasInfo, setSebasInfo] = useState({});

  return (
    <>
      <div className="site">
        <div className="presentation">
          <div className="greetings">
            <h1>Hi, I am</h1>
          </div>
          <div className="name">
            <AnimatedText textColor="#FF4136" overlayColor="#001f3f">
              Sebastián
            </AnimatedText>
          </div>
          <div className="lastname">
            <AnimatedText textColor="#001f3f" overlayColor="#FF4136">
              Barckhahn
            </AnimatedText>
          </div>
          <div className="subtitle">
            <h1>full stack web developer</h1>
          </div>
        </div>
        <div className="stupid-info">
          <div className="info">
            This is a fullstack webapp, you can check more about it in the
            section "About this Site" in the menu above (you can navigate with
            your voice).
          </div>
          <div className="warning">Chrome browser is recomended !!!</div>
        </div>
      </div>
    </>
  );
}
