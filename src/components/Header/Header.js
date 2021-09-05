import React from "react";
import BackgroundImage from "../Header/images/dunderMifflinLogo.png";
import "./header.css";

function Header() {
  return (
    <div
      className="jumbotron jumbotron-image jumbotron-fluid"
      id="jumbotron"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className="container" />
    </div>
  );
}

export default Header;
