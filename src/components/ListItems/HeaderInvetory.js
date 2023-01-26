import React from 'react';
import "./../../styles/sort_row.css";

function HeaderInvetory({sortItems}){

  return (
    //subtract expiration date from current date
      <div className="header_inventory_container">
        {/*<div className="header_inventory_id"onClick={() => sortItems("id")}>ID</div>*/}
        <div className="header_inventory_name" onClick={() => sortItems("name")}>Name</div>
        <div className="header_inventory_expiration" onClick={() => sortItems("expiration")}>Expiration</div>
        <div className="header_inventory_amount" onClick={() => sortItems("amount")}>Amount</div>
        <div className="header_inventory_input_edit"></div>
        </div>
  );
}
export default HeaderInvetory;