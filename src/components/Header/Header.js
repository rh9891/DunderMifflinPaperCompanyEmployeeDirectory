import React from "react";
import "./header.css";

function Header(props) {
    return(
        <div className="jumbotron jumbotron-fluid" id="jumbotron">{props.children}
        <div className="container">
        </div>
        </div>
    )
};

export default Header