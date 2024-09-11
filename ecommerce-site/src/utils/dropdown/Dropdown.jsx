import React from "react";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  return <div>
    <li className="dropdown"> 
        <Link to={props}></Link>
    </li>
  </div>;
};

export default Dropdown;
