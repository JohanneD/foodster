import React from 'react';
import TabsShoppingList from '../components/TabComponent/tabsShoppingList';
import Tabs from '../components/TabComponent/tabsShoppingList';
import styles from "./../styles/page.module.css";

function Shoppinglist(){
  /* This is where the all the content of the shopping list goes. */

  return (
    <div className={styles.page_container}>
      <div className={styles.page_size}>
        <h1>My shoppinglist</h1>
        <TabsShoppingList />
      </div>
    </div>
  );
}
export default Shoppinglist;