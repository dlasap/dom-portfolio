import react from "react";
import "./styles/Aside.css";

const Aside = () => {
  return (
    <>
      <div className="aside-container">
        <h2 id="job-title">Software Engineer</h2>
        <h3>
          Hey there! I'm<p id="name">Dominic Gabriel Lasap</p>
        </h3>

        <div className="aside-content-container">
          <article> A Filipino Software Engineer passionate about creating efficient Web Applications using JavaScript frameworks.</article>
          <button>Hire Me</button>
          <div> Links / Icons</div>
        </div>
      </div>
    </>
  );
};

export default Aside;
