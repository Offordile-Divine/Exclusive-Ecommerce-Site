import React from "react";
import "./noFound.css"
import { Link } from "react-router-dom";

const NofoundPage = () => {
  return (
    <div className="noFound">
      <h1>404 not found</h1>
      <Link to="/">Move to home page</Link>
    </div>
  );
};

export default NofoundPage;
