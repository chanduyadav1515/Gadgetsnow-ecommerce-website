import React from "react";
import { useSelector } from "react-redux";
import { categoryImages } from "../../helper/images";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "../../styling/helperComponent1.scss";
function HelperComponent1() {
  const navigate = useNavigate();
  let categoryData = useSelector((state) => state.fullDataReducer.fullData);

  return (
    <div className="comp-1-full-box">
      {Object.keys(categoryData).map((single) => {
        let imageSet = categoryImages.earphone_png;
        if (single == "headphones") {
          imageSet = categoryImages.headphone_png;
        } else if (single == "speakers") {
          imageSet = categoryImages.speaker_png;
        }
        return (
          <div className="comp-1-single-box">
            <div className="comp-1-image">
              <img src={imageSet} width="220" height="220" />
            </div>
            <Link
              to={`/${single}`}
              style={{ textDecoration: "none" }}
              className="comp-1-name"
            >
              {single}
            </Link>
            <Link
              to={`${single}`}
              style={{ textDecoration: "none" }}
              className="comp-1-shop"
            >
              Shop Now <span>&#62;</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default HelperComponent1;
