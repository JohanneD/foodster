import React, {useState} from 'react';
import "./../../styles/inventoryitem.css";
import {toDaysUntil} from "../AllTabs/HelperFunc.js";
import editimage from "../../Images/edit.png";
import delimage from "../../Images/delete.png";
import checkImage from "../../Images/check.png"

function InventoryListItem({ id, name, expiration, amount, handleDelete, setUpdate, type}){
    /*useStates are almost like variables in React, but the great thing about them is
    that they can track changes. if you want the value from a useState you use the 
    first parameter (e.g. changedName), if you want to change the value you use the 
    second paramenter (e.g. setChangedName). This is also the most common way to name
    the paramenters with the name and the set in front of the name.*/
    const [isEditing, setIsEditing] = useState(false);
    const [changedName, setChangedName] = useState(name);
    const [changedExpiration, setChangedExpiration] = useState(expiration);
    const [changedAmount, setChangedAmount] = useState(amount);

    /* this function calles the setUpdate which saves the updated text. */
    const saveEdit = () => {
        setIsEditing(false);
        setUpdate(id, changedName, changedExpiration, changedAmount, type);
    }

    /* Since in this function i kind of want to show 2 different views. So here i have 
       two different return statements. One that returns the edit view of the item and 
        one that return the ordinary list item. The return here is for the edit view*/
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

    /* Here is the ordinary inventory view. */
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