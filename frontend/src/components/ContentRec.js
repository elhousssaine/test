import React from "react";
import "./ContentRec.css";
import { NavLink } from "react-router-dom";

function ContentRec(props) {
  let Styles = {
    color: "white",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "grey",
  };

  if (props.isImg === true) {
    const url_img = props.imgUrl;
    const back_img = "url(" + url_img + ")";
    Styles.backgroundImage = back_img;
  } else {
    Styles.backgroundImage =
      "linear-gradient(180deg," +
      props.hex1 +
      " 0%, " +
      props.hex2 +
      " 98.96%)";
  }

  return (
    <NavLink
      to={props.isClickImg ? "/project/" + props.prjId : "/"}
      style={{ textDecoration: "none" }}
    >
      <div
        className="RecContent container full-height d-flex flex-column"
        style={Styles}
      >
        <div className="row title__RecContent">{props.title}</div>
        <div className="row mt-auto">
          <div className="col subtitle__RecContent">{props.parag1}</div>
          <div className="col subtitle__RecContent">
            {props.type ? props.parag2 : ""}
          </div>
          <div className="col subtitle__RecContent">
            {props.type ? "" : props.parag2}
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default ContentRec;
