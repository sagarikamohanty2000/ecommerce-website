import React from 'react';
import Cart from '../Cart/Cart';
import classes from './Header.module.css'

const Header = (props) => {

    const onClickCart = (cartFlag) => {
        props.handleCartBtn(cartFlag);
    }
 
    return(
        <>
        <div className={classes.header}>
            <ul className={classes.unorderList}>
                <li>HOME</li>
                <li>STORE</li>
                <li>ABOUT</li>
            </ul>
            <Cart cartBtn={onClickCart}></Cart>
        </div>
        <div className={classes['header-second']}>
            <h1>The Generics</h1>
        </div>
        </>
    )
}

export default Header;