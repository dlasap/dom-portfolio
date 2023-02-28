import react from "react";
import CustomNavBar from "./CustomNavBar";
import "./styles/Header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <h1>DGL</h1>
        {/* <CustomNavBar /> */}
        {/* <div className="menu-container">
          <h3>home</h3>
          <h3>home</h3>
        </div> */}
      </div>
    </>
  );
};

export default Header;
