import React from "react";
import { useNavigate } from "react-router-dom";
import "../styling/home.scss";
import {HelperComponent1,HelperComponent2,HelperComponent3} from './index'

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home-first-banner">
        <div className="home-first-banner-content">
          <div className="home-new-product">NEW PRODUCT</div>
          <div className="home-product-name">XX99 Mark 11 Headphones</div>
          <div className="home-product-desc">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast
          </div>
          <button
            className="home-seeProducts-button"
            onClick={() => {
              navigate("/headphones/1");
            }}
          >
            SEE PRODUCTS
          </button>
        </div>
      </div>
      <HelperComponent1 />

      <HelperComponent2 />
      <HelperComponent3 />
    </div>
  );
}
