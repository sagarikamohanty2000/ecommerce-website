import React from "react";
import StoreDisplay from "./StoreDisplay";
import classes from './StoreList.module.css';

import { Container, Row, Col } from "react-bootstrap";

const StoreList = () => {
  const productsArr = [
    {
      title: "Album 1",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Album 2",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Album 3",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
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
            <StoreDisplay prod={product}></StoreDisplay>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default StoreList;
