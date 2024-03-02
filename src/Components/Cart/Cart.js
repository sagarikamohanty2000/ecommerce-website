import React, {useContext} from 'react';
import ContextApi from '../../Store/ContextApi';
import classes from './Cart.module.css';

const Cart = (props) => {
 const contextApi = useContext(ContextApi);

 const cartItem = contextApi.items.reduce((curValue, item) => {
   return curValue + Number(item.qty)
 },0); 
   const onClickHandler = () => {
      props.cartBtn(true);
   }
 return (
    <div className={classes.cartFrame}>
     <button className={classes.btn} onClick={onClickHandler}>
         cart
     </button>
     <div className={classes.badge}>
        {cartItem}
     </div>
    </div>
 )
}

export default Cart;