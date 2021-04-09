import React from "react";
import "./Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMailchimp,
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div className="msocial">
      <div className="mlinks">
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/sebastianbarckhahn"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          className="mgithub"
          href="https://github.com/SebasBar"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          className="mail"
          href="mailto: sdbarckhahn@gmail.com"
          target="_blank"
        >
          <FontAwesomeIcon icon={faMailchimp} size="2x" />
        </a>
      </div>
      <div className="text">my social media</div>
    </div>
  );
}
