import React from "react";
import {Container,Col,Row} from 'react-bootstrap';

const CartDisplay = (props) => {
  return ( 
  <>
   <Container>
            <Row>
                <Col>{props.cart.title} {props.cart.imageUrl}</Col>                
                <Col>{props.cart.price}</Col>
                <Col>{props.cart.quantity}</Col>
            </Row>
        </Container>
  </> 
  );
};

export default CartDisplay;
