import "./AboutMe.css";
import PDFRender from "../../components/PDFRender/PDFrender";

export default function AboutMe() {
  return (
    <>
      <div className="space" />
      <div className="line" />
      <div className="top">
        <img
          className="pic"
          alt="sebas"
          src="http://localhost:8000/SebasBar/cv.png"
        />
        <div className="text1">
          I am Web Developer with experience in both front and back end. I have
          participate and developed different projects that you can see in the
          "projects" section of this website. I am a curious, critical and a
          creative person with experience in different fields, with passion for
          physics, artificial inteligence, cook, food, music and videogames.
          Here you can check my CV and even download it with this pdf reader
          that I created using react-pdf and a completly custom made panel ↓.
        </div>
      </div>
      <div className="line" />
      <div className="space" />
      <div className="line" />
      <div className="bottom">
        <div className="group-text">
          <div className="text2">
            I have knowledge in HTML, CSS (Bootstrap, Material UI, Storybooks,
            Styled components, Tailwind), Javascript, React, Redux, Next, Vue,
            Nuxt, Node.js, Express, Databases (MySQL, PostgreSQL), REST API,
            JWT, Git / GitHub, Unix, Unix Terminal and Agile methodologies
            (Scrum, Sprint Planning, User Stories) among others working in front
            and back end.
          </div>
          <div className="text2">
            My studies as an electrical engineer gave me experience in
            electronics and the integration of different components (sensors,
            motors and their associated programming). With my work experience as
            an electrical engineer I acquired knowledge mainly in railway
            signaling and power systems and I have experience as Project Manager
            as well.
          </div>
        </div>
        <div className="pdf">
          <PDFRender pdfFile="http://localhost:8000/docs/SebastianBarckhahnResume.pdf" />
        </div>
      </div>
    </>
  );
}
