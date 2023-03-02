import react, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./styles/Contact.css";
import { TextField } from "@mui/material";
import "./styles/Works.css";

const Works = () => {
  return (
    <div className="works-container">
      <h2> Sample Works & Projects</h2>
      <div>
        <ul className="worklist">
          <li className="work-item">
            <span className="work-title">
              <p>Contact Management App</p>
              <div className="tech-stack">ReactJS, NodeJS, TypeScript, MongoDB</div>
            </span>
            <span className="work-desc">CMS APP</span>
          </li>
          <li className="work-item">
            {" "}
            <span className="work-title">
              <p>Condominium Rentals Page for Viewing</p>
              <div className="tech-stack">ReactJS, NodeJS, TypeScript, MongoDB</div>
            </span>
            <p className="work-desc">CMS APP</p>
          </li>
          <li className="work-item">
            {" "}
            <span className="work-title">
              <p>ReSynchronization for BackEnd Service</p>
              <div className="tech-stack">ReactJS, NodeJS, TypeScript, MongoDB</div>
            </span>
            <p className="work-desc">CMS APP</p>
          </li>
          <li className="work-item">
            {" "}
            <span className="work-title">
              <p>E-mail Service</p>
            </span>
            <p className="work-desc">CMS APP</p>
          </li>
          <li className="work-item">
            {" "}
            <span className="work-title">
              <p>GoRentals Project - Company</p>
            </span>
            <p className="work-desc">CMS APP</p>
          </li>
          <li className="work-item">
            {" "}
            <span className="work-title">
              <p>PostgresSQL CRUD ORM & Normalizer</p>
            </span>
            <p className="work-desc">CMS APP</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Works;
