import React, { useContext } from "react";
import ContextApi from "../../Store/ContextApi";
import classes from "./CartList.module.css";

import { Container, Col, Row } from "react-bootstrap";

const CartList = () => {
  const contextApi = useContext(ContextApi);
  return (
    <>
      {contextApi.items.map(
        (cart) => (
          console.log("inside cart display", cart),
          (
            <Container>
              <Row>
                <Col>
                  {cart.title}{" "}
                  <img
                    src={cart.imageUrl}
                    style={{ width: "20px", height: "20px" }}
                  ></img>
                </Col>
                <Col>{cart.price}</Col>
                <Col>{cart.qty}</Col>
                <Col>
                  <button className={classes.removeBtn}>Remove</button>
                </Col>
              </Row>
            </Container>
          )
        )
      )}
    </>
  );
};

export default CartList;
