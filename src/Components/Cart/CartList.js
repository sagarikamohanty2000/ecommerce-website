import React from "react";
import CartDisplay from "./CartDisplay";

import {Container,Col,Row} from 'react-bootstrap';

const CartList = () => {
  const cartElements = [
    {
      title: "Album 1",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Album 2",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Album 3",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];
  return (
  <>
     {cartElements.map((cart) => (
   <Container>
   <Row>
       <Col>{cart.title} <img src ={cart.imageUrl} style={{width:'20px',height:'20px'}}></img></Col>                
       <Col>{cart.price}</Col>
       <Col>{cart.quantity}</Col>
   </Row>
</Container>
))}
  </>);
};

export default CartList;
