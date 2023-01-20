import React from 'react';
import Tabs from '../components/TabComponent/tabs';
import styles from "./../styles/page.module.css";

function Inventoy(){
  return (
    <div className={styles.page_container}>
      <div className={styles.page_size}>
        <h1>My inventory</h1>
        <Tabs />
      </div>
    </div>
  );
}
export default Inventoy;