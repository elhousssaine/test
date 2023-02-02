import React from "react";
import "./Informations.css";
import "./Informationsdesigners.css";

function Informationsdesigners() {
  return (
    <section className="footer__info">
      <h2 className="letswork">Lets work together</h2>
      <p>
        New York
        <br />
        457 Grand St, Ground Fl
        <br />
        Brooklyn, NY 11211
        <br />
        +212 681 231 577
        <br />
        info@weareelx.com
        <br />
      </p>
      <div className="made_with_dark">
        MADE
        <br />
        WITH
        <br />
        <svg
          width="188"
          height="65"
          viewBox="0 0 188 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41 31.9637L20.5 65L0 65L-5.68248e-06 0L20.5 -1.79217e-06L20.5 31.9637L41 31.9637Z"
            fill="white"
          />
          <path
            d="M143 -3.67176e-06L122 65L101 65L101 0L143 -3.67176e-06Z"
            fill="white"
          />
          <path
            d="M147 33.0363L163.13 -3.5893e-06L188 0L188 47.4265L174.161 65L147 65L147 33.0363Z"
            fill="white"
          />
          <path
            d="M47 24.06L59.7049 -3.5932e-06L88 0L88 47.4265L74.1606 65L47 65L47 24.06Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

export default Informationsdesigners;
