import React from 'react';
import "./../../styles/inventoryitem.css";
import newImage from "./../../Images/new.png";

function HeaderShopping({sorton, setIsAddingNew}){
  /* the is the header for the inventory list. Here we have the onClick which calles the 
     sortItems function with the correct type to sort on and also what type of list to 
     sort.
     Here is also the add button for adding a new inventory item */

  return (
      <div className="header_container">
        <div className="inventory_name" >
          <div title="Sort on name" className='header_text' onClick={() => sorton("name")}>Name</div> 
        </div>
        <div className="inventory_amount" onClick={() => sorton("amount")}>
          <div title="Sort on Amount" className="header_text" onClick={() => sorton("Expiration")}>Amount</div>
        </div>
        <div className="header_inventory_add">
        <div title="Add new inventory" onClick={() => setIsAddingNew(true)}><img src={newImage} alt="add new item" height="50px"/></div>
        </div>
      </div>
  );
}
export default HeaderShopping;