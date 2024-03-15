import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContextApi from "../../Store/ContextApi";
import classes from "./StoreDisplay.module.css";
import { Container, Row, Col } from "react-bootstrap";

const StoreDisplay = (props) => {
  const contextApi = useContext(ContextApi);

  const onAddToCartHandler = async () => {
    const item = {
      id: props.prod.id,
      title: props.prod.title,
      price: props.prod.price,
      imageUrl: props.prod.imageUrl,
      qty: 1,
    };
    const updatedEmail = contextApi.email.replace("@","");
      const finalEmail = updatedEmail.replace(".","");
    try {
      const response = await fetch(
        `https://crudcrud.com/api/a208c057a0cc4ed59662e63c95a65a36/cart${finalEmail}`,
        {
          method: "POST",
          body: JSON.stringify({
            id: props.prod.id,
            title: props.prod.title,
            price: props.prod.price,
            imageUrl: props.prod.imageUrl,
            qty: 1,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data);
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.log(error);
    }
    contextApi.addItem(item);
  };
  return (
    <Col xs={6}>
      <div className={classes.storeFrame}>
        <div className={classes.title}>
          <Link to="/products/p1">
            <h3>{props.prod.title}</h3>
          </Link>
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
