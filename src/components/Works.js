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
                which were React, TypeScript, NodeJS
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
                <li className="tech-item">NodeJS</li>
                <li className="tech-item">TypeScript</li>
                <li className="tech-item">MongoDB</li>
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
                <li className="tech-item">ReactJS</li>
                <li className="tech-item">NodeJS</li>
                <li className="tech-item">TypeScript</li>
                <li className="tech-item">MongoDB</li>
                NodeJS, NestJS , WebHooks, and the databases mentioned were used primarily.
              </div>
            </span>
            <p className="work-desc">
              Basically the Company's API has been using 3 different Databases: Redis, RethinkDB and ElasticSearch. It was my task to observe the data
              inaccuracies and as well as fix/sychronize data that aren't synced and accurate. All databases should be synced and monitored by the
              DevOps team after deployment and notifications were sent on an internal channel for information about the health of the database.
            </p>
          </li>
          <li className="work-item">
            {" "}
            <span className="work-title">
              <p>E-mail Service</p>
              <div className="tech-stack">
                <li className="tech-item">ReactJS</li>
                <li className="tech-item">NodeJS</li>
                <li className="tech-item">TypeScript</li>
                <li className="tech-item">MongoDB</li>
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
                <li className="tech-item">MongoDB</li>
                and its tech stack is on JavaScript: React, NodeJS, TypeScript, NestJS.
              </div>
            </span>
            <p className="work-desc">
              It was our primary client in our company. I worked with the frontend side for 6 months and was transferred to the backend due to my
              evaluation and skill assessments. I was more fit on the backend than in the frontend, lack of man power in the said part was also the
              reason for transfer. I enjoyed both but I loved working at the backend more.
            </p>
          </li>
          <li className="work-item">
            {" "}
            <span className="work-title">
              <p>PostgresSQL CRUD ORM & Normalizer</p>
              <div className="tech-stack">
                <li className="tech-item">ReactJS</li>
                <li className="tech-item">NodeJS</li>
                <li className="tech-item">TypeScript</li>
                <li className="tech-item">MongoDB</li>
                Postgresql, NodeJS, NestJS,TypeScript
              </div>
            </span>
            <p className="work-desc">
              I was primarily tasked to make a Object related mapping or basically a normalizer for our existing API to adapt to our plan to be new
              database which is postgres, just for a backup and maybe soon to be primary database since our Redis and elasticsearch sometimes have
              trouble syncing. It was more of the backend side project assigned by my team lead.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Works;
