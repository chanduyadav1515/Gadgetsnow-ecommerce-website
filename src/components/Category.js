import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

import '../styling/category.scss'
import {categoryImages} from "../helper/images";
export default function Category() {
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.isLoading);
  const data = useSelector((state) => state.fullData);
  const location = useLocation();
  if (!isLoading) {
    let getCategory;
    if (location.state != null) {
      const { category } = location.state;
      getCategory = category;
    } else {
      let category = window.location.pathname;
      getCategory = category.substring(1);
    }
    let showCatName = "EARPHONES"
    if(getCategory == "headphones")
    {
        showCatName = "HEADPHONES";
    }
    else if(getCategory == "speakers")
    {
      showCatName = "SPEAKERS"
    }
    const categoryData = data[getCategory];
    return (
      <div>
        <div className="display-name">{showCatName}</div>
        {categoryData.map((single, index) => (
          <div key={index} className="product-main-box">
            <div className="product-inner-box-1">
              <div className="product-name">{single.name}</div>
              <div className="product-description">{single.description}</div>
              <div className="check-product-button">
                <button onClick={()=>{
                  navigate(`/${getCategory}/${single.id}`);
                }}>SEE PRODUCT</button>
              </div>
            </div>
            <div className="product-inner-box-2">
              <img src={categoryImages[single.id]} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
