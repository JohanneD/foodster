import React, {useState} from 'react';
import "./../../styles/inventoryitem.css";
import {toDaysUntil} from "../AllTabs/HelperFunc.js";
import editimage from "../../Images/edit.png";
import delimage from "../../Images/delete.png";
import checkImage from "../../Images/check.png"

function InventoryListItem({ id, name, expiration, amount, handleDelete, setUpdate, type}){
    const [isEditing, setIsEditing] = useState(false);
    const [changedName, setChangedName] = useState(name);
    const [changedExpiration, setChangedExpiration] = useState(expiration);
    const [changedAmount, setChangedAmount] = useState(amount);

    const saveEdit = () => {
        setIsEditing(false);
        setUpdate(id, changedName, changedExpiration, changedAmount, type);
    }

    if (isEditing){
        return(
            <div className="inventory_container_edit">
                <div className="inventory_name">
                    <input type="text" 
                    className="textInput" 
                    value={changedName}
                    onChange={(e)=>setChangedName(e.target.value)}/>
                </div>
                <div className="inventory_expiration">
                    <input type="text"  
                        className="textInput" 
                        value={changedExpiration}
                        onChange={(e)=>setChangedExpiration(e.target.value)}/>
                </div>
                <div className="inventory_amount">
                    <input type="text"
                        className="textInput" 
                        value={changedAmount}
                        onChange={(e)=>setChangedAmount(e.target.value)}/>
                </div>
                <div className="inventory_input_edit">
                    <div title="Save changes" className="edit_item_button" onClick={() => saveEdit()}><img src={checkImage} alt="edit" height="35px"/></div>
                </div>
            </div>
        );
    }

  return (
    <div className='inventory_container'>
        <div className="inventory_name">
            <p>{name}</p>
        </div>
        <div className="inventory_expiration">
            <p>{toDaysUntil(expiration)}</p>
        </div>
        <div className="inventory_amount">
            <p>{amount}</p>
        </div>
        <div className="inventory_edit">
            <div title="Edit Item" className="edit_item_button" onClick={() => setIsEditing(true)}><img src={editimage} alt="edit" height="50px"/></div>
            <div title="Delete Item" className="delete_item_button" onClick={() => handleDelete(id, type)}><img src={delimage} alt="edit" height="50px"/></div>
        </div>
    {/*<button className='add_to_shoppinglist' onClick={()=>addToShopping()}>Need more</button>*/}
    </div>
  );
}
export default InventoryListItem;