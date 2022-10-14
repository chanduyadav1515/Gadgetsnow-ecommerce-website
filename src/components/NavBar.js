import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping ,faXmark} from "@fortawesome/free-solid-svg-icons";
import { useDispatch,useSelector } from 'react-redux';


import '../styling/NavBar.scss'
import {setCartView} from '../action'

export default function NavBar() {
    const checkCartBoxView = useSelector((state) => state.fullDataReducer.isCartOpen);
    const dispatch = useDispatch()
    const style = {
      color: "inherit",
      textDecoration: "inherit",
    };
  return (
    <div className="navbar-main-box">
      <div className="app-name">
        <Link to="/" style={style}>
          GADGETSNOW
        </Link>
      </div>
      <div className="nav-list">
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
          <Link to="/earphones" state={{ category: "earphones" }} style={style}>
            EARPHONES
          </Link>
        </div>
      </div>
      <div>
        <div className="cart-icon">
          <FontAwesomeIcon
            onClick={() => dispatch(setCartView(true))}
            icon={faCartShopping}
          />
        </div>
        {checkCartBoxView && (
          <div className="cart-box">
            <div className="cart-box-header">
              <div>Cart Details</div>
              <div>
                <FontAwesomeIcon
                  onClick={() => dispatch(setCartView(false))}
                  icon={faXmark}
                />
              </div>
            </div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
        )}
      </div>
    </div>
  );
}

function cartBox(){
    return(<div>cartbox</div>)
}
