import React from "react";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import "./home.css";

export default function Home() {
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
            <h1>Web developer</h1>
          </div>
        </div>
        <div className="stupid-info">
          <div className="info">
            This is a fullstack web application that you can navigate with your
            voice, just press the mic and say the title of the page you want to
            go. The site is still under construction.
          </div>
          <div className="warning">
            Chrome browser is recomended for voice control !!!
          </div>
        </div>
      </div>
    </>
  );
}
