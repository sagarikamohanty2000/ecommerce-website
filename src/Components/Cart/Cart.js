import React from 'react';
import classes from './Cart.module.css';

const Cart = () => {
 return (
    <div className={classes.cartFrame}>
     <button className={classes.btn}>
         cart
     </button>
     <div className={classes.badge}>
        0
     </div>
    </div>
 )
}

export default Cart;