import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import '../styling/footer.scss'

export default function Footer() {
  const style = {
    color: "inherit",
    textDecoration: "inherit",
  };
  return (
    <div className="footer-main-box">
      <div className="footer-box-1">
        <div className="orange-color"></div>
        <div className="footer-name">GADGETSNOW</div>
        <div className="footer-description">
          GadgetsNow is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </div>
        <div className="footer-copy">Copyright2021. All Rights Reserved</div>
      </div>
      <div className="footer-box-2">
        <div className="foot-list">
          <div>
            <Link to="/" style={style}>
              HOME
            </Link>
          </div>
          <div>
            <Link
              to="/headphones"
              state={{ category: "headphones" }}
              style={style}
            >
              HEADPHONE
            </Link>
          </div>
          <div>
            <Link to="/speakers" state={{ category: "speakers" }} style={style}>
              SPEAKERS
            </Link>
          </div>
          <div>
            <Link
              to="/earphones"
              state={{ category: "earphones" }}
              style={style}
            >
              EARPHONES
            </Link>
          </div>
        </div>
        <div className="social-logos">
          <div>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
}
