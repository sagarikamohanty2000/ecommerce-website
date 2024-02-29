import React from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {

   const onClickHandler = () => {
      props.cartBtn(true);
   }
 return (
    <div className={classes.cartFrame}>
     <button className={classes.btn} onClick={onClickHandler}>
         cart
     </button>
     <div className={classes.badge}>
        0
     </div>
    </div>
 )
}

export default Cart;