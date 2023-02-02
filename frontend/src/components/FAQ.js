import React, { useState } from "react";
import "./FAQ.css";

const Plusicon = (
  <svg
    className="plus_icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
  </svg>
);

function FAQ() {
  const [rotate, setRotate] = useState(false);
  return (
    <div className="boite">
      <div className="container-faq">
        <h1>FAQ</h1>
        <div className="questions">
          <div className="visible-pannel">
            <h2>
              WHAT DO YOU CHARGE FOR YOUR GRAPHIC
              <br /> DESIGN SERVICES?
            </h2>
            {Plusicon}
          </div>
          <hr />
          <div className="toggle-pannel">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem et asperiores, quod qui in ducimus rerum nisi
              dolorum. Optio, vel?
            </p>
          </div>
        </div>

        <div className="questions">
          <div className="visible-pannel">
            <h2>
              HOW DOES YOUR LOGO DESIGN PROCESS
              <br /> WORK?
            </h2>
            {Plusicon}
          </div>
          <div className="toggle-pannel">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus neque et, excepturi sequi laboriosam at sit
              exercitationem repellat voluptate aliquam? Officiis inventore
              quibusdam doloremque amet quidem dolor quod praesentium in, ullam
              tenetur corrupti ducimus commodi, minima, nam maiores temporibus
              assumenda necessitatibus natus voluptas! Mollitia distinctio
              consequuntur eos aut voluptatibus pariatur?
            </p>
          </div>
          <hr />
        </div>

        <div className="questions">
          <div className="visible-pannel">
            <h2>
              IS THE ARTWORK OUR PROPERTY ONCE PAID
              <br /> FOR?
            </h2>
            {Plusicon}
          </div>
          <div className="toggle-pannel">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
              est!
            </p>
          </div>
          <hr />
        </div>

        <div className="questions">
          <div className="visible-pannel">
            <h2>
              WHAT IS THE CLIENT’S INVOLVEMENT IN THE
              <br /> DESIGN PROCESS?
            </h2>
            {Plusicon}
          </div>
          <div className="toggle-pannel">
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati iusto soluta sunt quos ex, quidem a. Perferendis non
              corporis dolore reiciendis corrupti temporibus voluptatum veniam
              aperiam nemo cumque fugit atque facere eius veritatis facilis, qui
              vero libero, molestias optio fuga labore, similique sint. Tempora
              enim, eum quia, repellendus rerum repellat quae quas error
              reprehenderit dolorum est nesciunt ducimus provident tenetur!
            </p>
          </div>
          <hr />
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js"></script>
      <script></script>
    </div>
  );
}

export default FAQ;
