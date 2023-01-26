import React from 'react';
//import "./../../styles/sort_row.css";
import "./../../styles/inventoryitem.css";

function HeaderInvetory({sortItems, setIsAddingNew, type}){

  return (
    //subtract expiration date from current date
      <div className="header_container">
        <div className="inventory_name" >
          <div title="Sort on name" className='header_text' onClick={() => sortItems("name", type)}>Name</div> 
        </div>
        <div className="inventory_expiration" onClick={() => sortItems("expiration", type)}>
          <div title="Sort on expiration day" className='header_text' onClick={() => sortItems("Expiration", type)}>Days to Expiration</div> 
        </div>
        <div className="inventory_amount" onClick={() => sortItems("amount", type)}>
          <div title="Sort on Amount" className="header_text" onClick={() => sortItems("Expiration", type)}>Amount</div>
        </div>
        <div className="header_inventory_add">
          <div title="Add new inventory" className="header_inventory_add_button" onClick={()=>setIsAddingNew(true)}>Add new</div>
        </div>
      </div>
  );
}
export default HeaderInvetory;