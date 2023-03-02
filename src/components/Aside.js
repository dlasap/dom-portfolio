import react from "react";
import "./styles/Aside.css";
import { Link, Navigate, useLocation } from "react-router-dom";

const Aside = () => {
  const loc = useLocation();
  const url = loc.pathname.split("/").pop();

  console.log(url);
  return (
    <>
      <div className="aside-container">
        <div>
          <h5>Hey there! I'm</h5>
          <h1 id="name">Dominic Gabriel Lasap</h1>
          <p id="job-title">Software Engineer</p>
        </div>

        <div className="aside-content-container">
          <p> A Filipino Software Engineer passionate about creating efficient Web Applications using JavaScript frameworks.</p>

          {url !== "contact" && (
            <Link className="hire-Link" to="/contact">
              Hire Me
            </Link>
          )}

          <div className="links-icons">
            <li className="l-icon">
              <a target="_blank" href="https://www.linkedin.com/in/dominic-gabriel-lasap-07655a199/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li className="l-icon">
              <a target="_blank" href="https://github.com/dlasap">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
            <li className="l-icon">
              <a target="_blank" href="https://www.facebook.com/dominiclasap/">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li className="l-icon">
              <a target="_blank" href="https://www.youtube.com/channel/UCwEu-BZyQ1hObZY_n_Dz3GQ">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;
