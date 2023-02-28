import react, { useState } from "react";
import "./styles/CustomNavBar.css";
const list = document.querySelectorAll(".list");
// function activelink() {
//   list.forEach((item) => item.classList.remove("active"));
//   this.classList.add("active");
// }
// list.forEach((item) => item.addEventListener("click", activelink));

const CustomNavBar = () => {
  const [toggle, setToggle] = useState([false, false, true, false]);

  const resetToggle = (index) => {
    const neg_arr = [false, false, false, false];
    neg_arr[index] = true;
    setToggle(neg_arr);
  };
  console.log(toggle);
  return (
    <div className="nav-container">
      <div className="navigation">
        <ul>
          <li onClick={() => resetToggle(0)} className={toggle[0] ? "list active" : "list"}>
            <a href="#">
              <span className="icon">
                <ion-icon name="person-circle-outline"></ion-icon>
              </span>
              <span className="text">Profile</span>
            </a>
          </li>
          <li onClick={() => resetToggle(1)} className={toggle[1] ? "list active" : "list"}>
            <a href="#">
              <span className="icon">
                <ion-icon name="document-text-outline"></ion-icon>
              </span>
              <span className="text">Resume</span>
            </a>
          </li>
          <li onClick={() => resetToggle(2)} className={toggle[2] ? "list active" : "list"}>
            <a href="#">
              <span className="icon">
                <ion-icon name="code-slash-outline"></ion-icon>
              </span>
              <span className="text">Projects</span>
            </a>
          </li>
          <li onClick={() => resetToggle(3)} className={toggle[3] ? "list active" : "list"}>
            <a href="#">
              <span className="icon">
                <ion-icon name="call-outline"></ion-icon>
              </span>
              <span className="text">Contact</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
};

export default CustomNavBar;
