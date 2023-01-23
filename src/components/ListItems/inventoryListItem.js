import React from 'react';
import "./../../styles/inventoryitem.css";

function InventoryListItem({ id, name, expiration, amount }){
  return (
      <div className="inventory_container">
        <div className="inventory_id">
            <p>{id}</p>
        </div>
        <div className="inventory_name">
            <p>{name}</p>
        </div>
        <div className="inventory_expliration">
            <p>{expiration}</p>
        </div>
        <div className="inventory_amount">
            <p>{amount}</p>
        </div>
        <div className="inventory_edit">
            <button className='edit_item_button'>edit</button>
            <button className='delete_item_button'>delete</button>
        </div>
    </div>
  );
}
export default InventoryListItem;