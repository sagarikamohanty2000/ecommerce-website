import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
 
    return(
        <>
        <div className={classes.frame}>
            <p>The Generics</p>
            <div className={classes.anchor}>
            <a href="https://www.youtube.com/">
             you
            </a>
            <a href="https://twitter.com/i/flow/login">twitter</a>
            <a href="nttps://facebook.com">facebook</a>
            </div>
        </div>
        </>
    )
}

export default Footer;