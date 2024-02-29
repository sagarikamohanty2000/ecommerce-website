import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import CartList from "./CartList";
import classes from "./CartModel.module.css";

const CartModel = () => {
  const CartFrame = () => {
    return (
      <Container>
        <div className={classes.cartFrame}>
          <button className={classes.cancelBtn}>X</button>
          <h2>CART</h2>

          <div className={classes.cartHeader}>
            <Row>
              <Col>
                <span className={classes.item}>Item</span>
              </Col>
              <Col>
                <span className={classes.price}>Price</span>
              </Col>
              <Col>
                <span className={classes.qty}>Quantity</span>
              </Col>
            </Row>
          </div>
          <CartList/>

          <div className={classes.totalAmt}>
            <span>Total : 0 </span>
          </div>
          <button className={classes.purchaseBtn}>Purchase</button>
        </div>
      </Container>
    );
  };
  return (
    <>
      {ReactDOM.createPortal(
        <CartFrame />,
        document.getElementById("cart-model")
      )}
    </>
  );
};

export default CartModel;
