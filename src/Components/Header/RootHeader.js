import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ContextApi from "../../Store/ContextApi";
import CartModel from "../Cart/CartModel";
import Cart from "../Cart/Cart";
import classes from "./RootHeader.module.css";

const RootHeader = (props) => {
  const [cartBtn, setCartBtn] = useState(false);
  const authcontext = useContext(ContextApi);

  const cartBtnHandler = (cartFlag) => {
    setCartBtn(cartFlag);
  };

  return (
    <>
      {cartBtn && <CartModel handleCartBtn={cartBtnHandler} />}
      <div className={classes.header}>
        <ul className={classes.unorderList}>
          <li>
            <Link to="/"> HOME </Link>
          </li>
          {authcontext.isLoggedIn && (
            <li>
              <Link to="/store"> STORE </Link>
            </li>
          )}
          <li>
            <Link to="/about"> ABOUT </Link>
          </li>
          <li>
            <Link to="/contactUs">CONTACT US</Link>
          </li>
          {!authcontext.isLoggedIn && (
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
          )}
        </ul>
        {authcontext.isLoggedIn && <Cart cartBtn={cartBtnHandler}></Cart>}
      </div>
    </>
  );
};

export default RootHeader;
