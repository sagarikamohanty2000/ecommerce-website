import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartModel from "../Cart/CartModel";
import Cart from "../Cart/Cart";
import classes from "./RootHeader.module.css";

const RootHeader = (props) => {
  const [cartBtn, setCartBtn] = useState(false);

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
          <li>
            <Link to="/store"> STORE </Link>
          </li>
          <li>
            <Link to="/about"> ABOUT </Link>
          </li>
        </ul>
        <Cart cartBtn={cartBtnHandler}></Cart>
      </div>
    </>
  );
};

export default RootHeader;
