import react from "react";
import img from "../assets/IMG20220519104426_2.jpg";
import "./styles/Content.css";
import pdf_file from "../assets/Official Resume - Dominic Lasap.pdf";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";

const Content = () => {
  return (
    <>
      {" "}
      <div className="content-container">
        <Routes>
          <Route path="/" element={<img className="image-section" src={img} height={650} />} />
          <Route
            path="/resume"
            element={
              <>
                <p style={{ padding: 0, margin: 0, fontSize: "1rem" }}> RESUME</p>
                <embed className="pdf-sec" src={pdf_file} type="application/pdf" width={"65%"} />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default Content;
