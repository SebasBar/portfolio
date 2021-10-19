import "./aboutthis.css";
import PDFRender from "../../components/PDFRender/PDFrender";

export default function AboutThis() {
  return (
    <>
      <div className="space"></div>
      <div className="space"></div>
      <div className="line"></div>
      <div className="title">Backend</div>
      <div className="space"></div>
      <div className="line"></div>
      <div className="top">
        <img
          className="picture1"
          alt="sebas"
          src="http://localhost:8000/pics/Portfolio/Backend-Schema.png"
        />
        <div className="text1">
          This is the schema of the Backend. The idea was to build a scalable
          backend with the possibility to add more users. For now, it has just
          one user asociated with all the projects. Each project has separate
          tables for: pictures, teammates (with links to their git pages),
          clients and languages used (with a description on mouse hover). <br />
          <br />
          Each project (from the project page) is been fetch from the backend
          taking all the related information from the different tables!!.
          <br />
          It uses prisma client, bcrypt for the password encription,
          jsonwebtoken, cookie parser, http-errors, among others.
        </div>
      </div>
      <div className="line"></div>
      <div className="space"></div>
      <div className="top">
        <div className="text1">
          The application has a functional administrator panel, where the login
          page will redirect you after enter the right credentials that are
          encrypted with bcrypt in the credentials table. <br />
          <br />
          Inside the administrator panel it is possible to do al CRUD
          operations. Also it is possible to make the connection between the
          tables, as it is shown in the following picture:
        </div>
        <img
          className="picture2"
          alt="sebas"
          src="http://localhost:8000/pics/Portfolio/Login.png"
        />
      </div>
      <div className="top">
        <div className="text1">
          This part of the application has no style applied and is one of the
          future improvements to do. Also, as modify the tables require
          administrator privileges, it is possible to get in and see the public
          information that the backend has (as seen here in the project
          description), but not modify the information (delete, update, or
          create).
          <br />
          <br />
          The backend schema it is built in PostgreSQL with prisma.
        </div>
        <img
          className="picture3"
          alt="sebas"
          src="http://localhost:8000/pics/Portfolio/AdminPanel.png"
        />
      </div>

      <div className="line"></div>
      <div className="title">Frontend</div>
      <div className="space"></div>
      <div className="line"></div>
      <div className="space"></div>
      <div className="top">
        <img
          className="picture2"
          alt="sebas"
          src="http://localhost:8000/pics/Portfolio/Title.png"
        />
        <div className="text1">
          For the front end I created a css effect when the user hover over with
          the mouse. Also I added voice control with "react-speech-kit" that
          allows the user to navigate every page with voice controls. <br />{" "}
          <br />
          The voice control works better with chrome.
        </div>
      </div>
      <div className="top">
        <div className="text1">
          Another cool feature this application has it is a fully functional PDF
          reader. It has a completely custom built control panel. To achieve
          this I used "react-to-print" and "react-pdf". <br /> <br />
          In the near future I will upload this as an npm package, because I
          found there is no to many options to handle PDF beside the built in
          print functionality that each browser has. <br />
          <br />
          Finally, this is a list of the improvements that I think this
          application needs: <br />
          <ul>
            <li>
              Make the whole site responsive (I know it should be mobile
              first!).
            </li>
            <br />
            <li>Style the administrator panel.</li> <br />
            <li>Error handling for backend calls (login).</li> <br />
            <li>Fix PDF container for different zooms.</li> <br />
          </ul>
        </div>
        <div className="pdf">
          <PDFRender pdfFile="http://localhost:8000/docs/SebastianBarckhahnResume.pdf" />
        </div>
      </div>
    </>
  );
}
