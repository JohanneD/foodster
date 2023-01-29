import styles from "./../styles/navbar.module.css"
import React from 'react';
import {  Link } from "react-router-dom";

function Navbar(){
    //This is the navigation bar, here we have the lik between the pages. 
    return(
        <nav className={styles.navigation_bar}>
            <li className={styles.navigation_bar_item}>
                <Link className={styles.navigation_bar_item_link} to="/">My Inventory</Link>
            </li>
            <li className={styles.navigation_bar_item}>
                <Link className={styles.navigation_bar_item_link} to="/shoppinglist">Shoppinglist</Link>
            </li>
        </nav>
    );
}

export default Navbar;