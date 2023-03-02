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
              <div className="tech-stack">
                <li className="tech-item">ReactJS</li>
                <li className="tech-item">NodeJS</li>
                <li className="tech-item">TypeScript</li>
                <li className="tech-item">MongoDB</li>
                <li className="tech-item">ExpressJS</li>
                <li className="tech-item">HTML</li>
                <li className="tech-item">CSS</li>
              </div>
            </span>
            <p className="work-desc">
              The project was personally made so we could practice our Tech Stacks. It was also a challenge since we needed to deploy it and
              containerize it with docker and deployed to Heroku. The project was simple and should demonstrate basic CRUD functionalities which have
              API calls to my Node Backend with ExpressJS.{" "}
            </p>
          </li>
          <li className="work-item">
            {" "}
            <span className="work-title">
              <p>Condominium Rentals Page for Viewing</p>
              <div className="tech-stack">
                <li className="tech-item">ReactJS</li>
                <li className="tech-item">TypeScript</li>
                <li className="tech-item">HTML</li>
                <li className="tech-item">CSS</li>
              </div>
            </span>
            <p className="work-desc">
              This work is specifically for our family business which revolves around a Condo Rental business. The App has the basic functions of a
              business page focused mainly on the rooms as our selling point and viewing its images.
            </p>
          </li>
          <li className="work-item">
            {" "}
            <span className="work-title">
              <p>ReSynchronization for BackEnd Service</p>
              <div className="tech-stack">
                <li className="tech-item">NodeJS</li>
                <li className="tech-item">TypeScript</li>
                <li className="tech-item">NestJS</li>
                <li className="tech-item">WebHooks</li>
                <li className="tech-item">ReThinkDB</li>
                <li className="tech-item">Redis</li>
                <li className="tech-item">ElasticSearch</li>
              </div>
            </span>
            <p className="work-desc">
              Since the data of our API is buggy/out of sync sometimes. It was my task to observe the data inaccuracies and as well as fix/sychronize
              data that aren't synced and accurate. All databases should be synced and monitored by the DevOps team after deployment and notifications
              were sent on an internal channel for information about the health of the database.
            </p>
          </li>
          <li className="work-item">
            {" "}
            <span className="work-title">
              <p>E-mail Service</p>
              <div className="tech-stack">
                <li className="tech-item">NestJS</li>
                <li className="tech-item">NodeJS</li>
                <li className="tech-item">TypeScript</li>
                <li className="tech-item">ElasticSearch</li>
                <li className="tech-item">SendGrid API</li>
              </div>
            </span>
            <p className="work-desc">
              The E-mail service was an API service for the frontend side. Once provided with the basic information needed and necessarry validations,
              It can electronically send the mail to the desired recipient.
            </p>
          </li>
          <li className="work-item">
            {" "}
            <span className="work-title">
              <p>GoRentals Project - Company</p>
              <div className="tech-stack">
                <li className="tech-item">ReactJS</li>
                <li className="tech-item">NodeJS</li>
                <li className="tech-item">TypeScript</li>
                <li className="tech-item">NestJS</li>
              </div>
            </span>
            <p className="work-desc">
              It was a vehicles rental business web app. I worked with the frontend side for 6 months and was transferred to the backend due to my
              evaluation and skill assessments. I was more fit on the backend than in the frontend. I enjoyed both but I loved working at the backend
              more.
            </p>
          </li>
          <li className="work-item">
            {" "}
            <span className="work-title">
              <p>PostgresSQL CRUD ORM & Normalizer</p>
              <div className="tech-stack">
                <li className="tech-item">NodeJS</li>
                <li className="tech-item">NestJS</li>
                <li className="tech-item">TypeScript</li>
                <li className="tech-item">Postgresql</li>
              </div>
            </span>
            <p className="work-desc">
              {" "}
              It was a backend side project assigned by my team lead which was to make an Object related mapping or basically a normalizer for our
              existing API to be adapted to PostgresSQL, and maybe soon to be primary database since our Redis and elasticsearch are buggy/out of
              sync.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Works;
