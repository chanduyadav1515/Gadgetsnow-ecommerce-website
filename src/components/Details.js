import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare,faMinusSquare } from "@fortawesome/free-regular-svg-icons";
import '../styling/details.scss'
import { categoryImages } from "../helper/images";
export default function Details() {
   const fullData = useSelector((state) => state.fullDataReducer.fullData);
  let data = window.location.pathname;
  const pathNames = data.split('/')
  const filterThisData = fullData[pathNames[1]]
  let dataToShow={}
  filterThisData.forEach((single)=>{
    if(single.id == parseInt(pathNames[2]))
    {
        dataToShow = single;
        return;
    }
  })
  return (
    <div className="detail-product-main-box">
      <div className="detail-product-inner-box-1">
        <div className="detail-product-name">{dataToShow.name}</div>
        <div className="detail-product-description">
          {dataToShow.description}
        </div>
        <div className="detail-product-price">Rs.{dataToShow.price}</div>
        <div className="detail-add-product-box">
          <div className="detail-add-product">
            <div>
              <FontAwesomeIcon icon={faPlusSquare} />
            </div>
            <div>10</div>
            <div>
              <FontAwesomeIcon icon={faMinusSquare} />
            </div>
          </div>
          <div className="detail-add-cart-button">
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <div className="detail-product-inner-box-2">
        <img src={categoryImages[dataToShow.id]} />
      </div>
    </div>
  );
}
