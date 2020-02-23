import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const footer = {
  background: "rgba(0, 0, 0, 0.7)"
  // height: "4rem"
};

const Footer = props => {
  return (
    <div className="bg-dark text-light mb-0" style={footer}>
      <div className="text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <h5 className="text-uppercase mt-3 mb-4">FitTracker App</h5>
            <p>This app made by Askat for portfolio project</p>
          </div>
          <div className="col-md-2 mx-auto">
            <h5 className="text-uppercase mt-3 mb-4">Contact</h5>
            <span className="lead">askatbakyev@gmail.com</span>
            <div className="mt-3">
              <a
                href="https://github.com/Askat08"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-1 text-white"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/askat-bakyev/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="footer-copyright text-center p-3">ASKAT © 2020</div>
    </div>
  );
};

export default Footer;
