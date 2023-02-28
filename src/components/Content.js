import react from "react";
import img from "../assets/IMG20220519104426_2.jpg";
import "./styles/Content.css";
const Content = () => {
  return (
    <>
      {" "}
      <div className="content-container">
        <img className="image-section" src={img} height={500} />
      </div>
    </>
  );
};

export default Content;
