import react, { useState } from "react";
import "./styles/CustomNavBar.css";
import { Link, Navigate } from "react-router-dom";

const CustomNavBar = () => {
  const [toggle, setToggle] = useState([true, false, false, false]);

  const resetToggle = (index) => {
    const neg_arr = [false, false, false, false];
    neg_arr[index] = true;
    setToggle(neg_arr);
  };
  console.log(toggle);
  return (
    <div className="navigation">
      <ul>
        <li
          onClick={() => {
            resetToggle(0);
            <Link to="/" />;
          }}
          className={toggle[0] ? "list active" : "list"}
        >
          <Link to="/">
            <span className="icon">
              <ion-icon name="person-circle-outline"></ion-icon>
            </span>
            <span className="text">Profile</span>
          </Link>
        </li>
        <li
          onClick={() => {
            resetToggle(1);
          }}
          className={toggle[1] ? "list active" : "list"}
        >
          <Link to="/resume">
            <span className="icon">
              <ion-icon name="document-text-outline"></ion-icon>
            </span>
            <span className="text">Resume</span>
          </Link>
        </li>
        <li
          onClick={() => {
            resetToggle(2);
          }}
          className={toggle[2] ? "list active" : "list"}
        >
          <Link to="/works">
            <span className="icon">
              <ion-icon name="code-slash-outline"></ion-icon>
            </span>
            <span className="text">Projects</span>
          </Link>
        </li>
        <li
          onClick={() => {
            resetToggle(3);
          }}
          className={toggle[3] ? "list active" : "list"}
        >
          <Link to="contact">
            <span className="icon">
              <ion-icon name="call-outline"></ion-icon>
            </span>
            <span className="text">Contact</span>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default CustomNavBar;
