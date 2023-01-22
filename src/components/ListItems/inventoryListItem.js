import React from 'react';
import "./../../styles/inventoryitem.css";

function InventoryListItem({ id, name, expiration, amount }){
    const current = new Date();
    var diffDays = null;
    if (expiration !== ""){
        const date1 = new Date(expiration.split('/').reverse().join('-'));
        const date2 = new Date(`${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`);
        const diffTime = Math.abs(date2 - date1);

        diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }; 
  return (
    //subtract expiration date from current date
      <div className="inventory_container">
        <div className="inventory_id">
            <p>{id}</p>
        </div>
        <div className="inventory_name">
            <p>{name}</p>
        </div>
        <div className="inventory_expliration">
            <p>{diffDays}</p>
        </div>
        <div className="inventory_amount">
            <p>{amount}</p>
        </div>
        <div className="inventory_edit">
            <button className='edit_item_button'>edit</button>
            <button className='delete_item_button'>delete</button>
        </div>
            {/*<div class="grid-contitem">
                <div class="item1">
                    <div class="inventory-heading">{name}</div>
                    <div class="inventory-expriation">Expiration date: {expiration}</div>
                </div>
                <div class="item2">
                    <div class="amount-adjuster">
                        <button class="indecrement-button" onClick="decrement()">-</button>
                        <div id="amount-item">{amount}</div>
                        <button class="indecrement-button" onClick="increment()">+</button>
                    </div>
                </div>
            </div>
        */}
        </div>
  );
}
export default InventoryListItem;