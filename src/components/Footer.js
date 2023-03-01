import react from "react";
import CustomNavBar from "./CustomNavBar";
import "./styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="navbar-footer">
        <CustomNavBar />
        <div className="nav-content">
          <span className="para">Powered with ReactJS, HTML, CSS</span>
          <p className="para">All rights reserved. 2023.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
