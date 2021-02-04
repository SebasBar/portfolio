import AnimatedText from "./components/AnimatedText/AnimatedText";

import "./App.css";

function App() {
  return (
    <div className="site">
      <div className="menu">
        <h2>Projects</h2>
        <h2>About Me</h2>
        <h2>About this Site</h2>
      </div>
      <div className="presentation">
        <div className="greetings">
          <h1>Hi, my name is</h1>
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
        <div className="info">you can check my work, information about me</div>
        <div className="info">and more in the menu above ....</div>
      </div>
    </div>
  );
}

export default App;
