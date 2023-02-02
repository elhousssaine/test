import React from "react";
import "./MainRec.css";
import "./MainLogo";
import MainLogo from "./MainLogo";

function MainRec() {
  return (
    <div className="container MainRec">
      <div className="row"></div>
      <div className="row">
        <MainLogo />
      </div>
      <div className="row">
        <div className="col">{""}</div>
        <div className="col">{""}</div>
        <div className="col desc">
          ELX is a creative design studio based in Rabat and Founded in 2020 by
          El Houssaine CHAHBOUN.
        </div>
      </div>
    </div>
  );
}

export default MainRec;
