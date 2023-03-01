import react from "react";
import "./styles/Aside.css";
import { Link, Navigate } from "react-router-dom";

const Aside = () => {
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

          <Link className="hire-Link" to="/contact">
            Hire Me
          </Link>

          <div> Links / Icons</div>
        </div>
      </div>
    </>
  );
};

export default Aside;
