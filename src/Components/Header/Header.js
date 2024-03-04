import React from "react";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";
import StoreList from "../Store/StoreList";

const Header = (props) => {
  return (
    <>
      <div className={classes["header-second"]}>
        <h1>The Generics</h1>
      </div>
      <StoreList></StoreList>
    </>
  );
};

export default Header;
