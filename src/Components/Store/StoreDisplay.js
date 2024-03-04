import React, { useContext } from "react";
import ContextApi from "../../Store/ContextApi";
import classes from "./StoreDisplay.module.css";
import { Container, Row, Col } from "react-bootstrap";

const StoreDisplay = (props) => {
  const contextApi = useContext(ContextApi);

  const onAddToCartHandler = () => {
    const item = {
      id: props.prod.id,
      title: props.prod.title,
      price: props.prod.price,
      imageUrl: props.prod.imageUrl,
      qty: 1,
    };
    console.log(item);
    contextApi.addItem(item);
  };
  return (
    <Col xs={6}>
      <div className={classes.storeFrame}>
        <div className={classes.title}>
          <h3>{props.prod.title}</h3>
        </div>
        <div className={classes.image}>
          <img src={props.prod.imageUrl}></img>
        </div>
        <div className={classes["price-btn"]}>
          <div className={classes.price}> ${props.prod.price}</div>
          <button className={classes.btn} onClick={onAddToCartHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    </Col>
  );
};

export default StoreDisplay;
