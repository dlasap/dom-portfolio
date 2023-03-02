import react, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./styles/Contact.css";
import { TextField } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({});

  const handleInput = (e) => {
    setFormData((data) => {
      return {
        ...data,
        [e.target.id]: e.target.value,
      };
    });
  };
  return (
    <div className="contact-container">
      <h3 className="header">Contact Me</h3>
      <Paper className="Paper" elevation={0} sx={{ border: "none", backgroundColor: "rgba(155, 84, 157, 0.0)" }}>
        <form action="https://formsubmit.co/lasapdominic@gmail.com" method="POST">
          <div className="contact-form-container">
            <div className="name">
              <TextField
                sx={{ width: "100%", background: "white" }}
                id="fname"
                onChange={(e) => handleInput(e)}
                value={formData.fname}
                name="name"
                type="text"
                required
                label="Your Full Name"
                color="secondary"
              />
            </div>
            <div className="email">
              <TextField
                id="email"
                sx={{ width: "100%", background: "white" }}
                onChange={(e) => handleInput(e)}
                value={formData.email}
                name="_subject"
                type="email"
                required
                label="Your Email"
                color="secondary"
              />
            </div>
            <div className="subject">
              <TextField
                sx={{ width: "100%", background: "white" }}
                id="subject"
                onChange={(e) => handleInput(e)}
                value={formData.subject}
                name="_subject"
                required
                label="Subject"
                color="secondary"
              />
            </div>
            <div className="message">
              <TextField
                sx={{ width: "100%", height: "100%", background: "white" }}
                id="message"
                onChange={(e) => handleInput(e)}
                value={formData.message}
                label="Message"
                multiline
                rows={4}
                type="text"
                name="message"
                defaultValue=""
                required
              />{" "}
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </Paper>
      <p className="btm-head">Contact Details:</p>
      <ul className="list-contact">
        <li>
          <ion-icon name="call-outline"></ion-icon> Phone: +63 905 561 0116 &#127477;&#127469;
        </li>
        <li>
          <ion-icon name="mail-outline"></ion-icon> Email: lasapdominic@gmail.com
        </li>
        <li>
          <ion-icon name="location-outline"></ion-icon> Location: Cebu, Philippines &#127477;&#127469;
        </li>
      </ul>
    </div>
  );
};

export default Contact;
