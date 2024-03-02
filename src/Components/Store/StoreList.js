import React from "react";
import StoreDisplay from "./StoreDisplay";
import classes from './StoreList.module.css';

import { Container, Row, Col } from "react-bootstrap";

const StoreList = () => {
  const productsArr = [
    { 
      id:1,
      title: "Album 1",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id:2,
      title: "Album 2",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id:3,
      title: "Album 3",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id:4,
      title: "Album 4",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
    <h3 className={classes.title}>MUSIC</h3>
      <Container>
        <Row>
          {productsArr.map((product) => (
            <StoreDisplay prod={product} key={product.id}></StoreDisplay>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default StoreList;
