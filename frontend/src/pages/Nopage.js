import React from "react";
import { NavLink } from "react-router-dom";
import "./Nopage.css";

function Nopage() {
  return (
    <div>
      <h1>404</h1>
      <br />
      No page found
      <br />
      <NavLink to="/">Go to the home page</NavLink>
    </div>
  );
}

export default Nopage;
