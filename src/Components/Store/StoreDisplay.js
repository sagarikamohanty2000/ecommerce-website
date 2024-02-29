import React from "react";
import classes from "./StoreDisplay.module.css";
import { Container,Row,Col } from "react-bootstrap";

const StoreDisplay = (props) => {
  return (
        <Col xs={6}>
          <div className={classes.storeFrame}>
          <div className={classes.title}>
            <h3>{props.prod.title}</h3>
            </div>
            <div className={classes.image}>
              <img src={props.prod.imageUrl}></img>
            </div>
            <div className={classes['price-btn']}>
            <div className={classes.price}> ${props.prod.price}</div>
            <button className={classes.btn}>Add to Cart</button>
            </div>
          </div>
        </Col>
  );
};

export default StoreDisplay;
