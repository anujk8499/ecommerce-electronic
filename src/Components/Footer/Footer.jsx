import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer d-flex justify-center items-center flex-col ">
      <div>
        <div className="d-flex items-center justify-between ">
          <Link
            className="link"
            to={"https://www.linkedin.com/in/anuj-kumar-9a5639204/"}
            target="_blank"
          >
            <BsLinkedin className="icon" />
          </Link>
          <Link
            className="link"
            to={"https://github.com/anujk8499"}
            target="_blank"
          >
            <BsGithub className="icon" />
          </Link>
          <Link className="link">
            <BsTwitter
              className="icon"
              to={"#"}
              target="_blank"
            />
          </Link>
        </div>
      </div>
      <p>
        Developed by <span>Anuj Kumar</span>
      </p>
    </div>
  );
};

export default Footer;
