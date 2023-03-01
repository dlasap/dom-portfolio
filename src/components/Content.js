import react from "react";
import img from "../assets/IMG20220519104426_2.jpg";
import "./styles/Content.css";
import pdf_file from "../assets/Official Resume - Dominic Lasap.pdf";
import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <>
      {" "}
      <div className="content-container">
        <Routes>
          <Route path="/" element={<img className="image-section" src={img} height={500} />} />
          <Route path="/resume" element={<embed className="pdf-sec" src={pdf_file} type="application/pdf" width={"95%"} />} />
        </Routes>
      </div>
    </>
  );
};

export default Content;
