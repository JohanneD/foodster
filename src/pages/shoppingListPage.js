import React from 'react';
import ShoppingList from '../components/AllTabs/ShoppingList.js';
import styles from "./../styles/page.module.css";

function ShoppingListPage(){
  /* This is where the all the content of the shopping list goes. */

  return (
    <div className={styles.page_container}>
      <div className={styles.page_size}>
        <h1>My shoppinglist</h1>
        <ShoppingList />
      </div>
    </div>
  );
}
export default ShoppingListPage;