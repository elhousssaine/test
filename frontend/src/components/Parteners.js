import React from "react";
import "./Parteners.css";
import Rabida from "./sponsors/Rabida"
import Nike from "./sponsors/nike"
import Samsung from "./sponsors/Samsung"

function Parteners() {
  return (
    <div className="d-flex justify-content-evenly sponsors">
      <Rabida/>
      <Nike/>
      <Samsung/>
    </div>
  );
}

export default Parteners;
