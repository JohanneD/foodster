import styles from "./../styles/navbar.module.css"
import React from 'react';
import {  Link } from "react-router-dom";

function Navbar(){
    return(
        <div className={styles.navigation_bar}>
            <li className={styles.navigation_bar_item}>
                <Link className={styles.navigation_bar_item_link} to="/">My Inventory</Link>
            </li>
            <li className={styles.navigation_bar_item}>
                <Link className={styles.navigation_bar_item_link} to="/shoppinglist">Shoppinglist</Link>
            </li>
        </div>
    );
}

export default Navbar;