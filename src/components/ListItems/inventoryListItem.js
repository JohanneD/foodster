import React, {useState} from 'react';
import "./../../styles/inventoryitem.css";

function InventoryListItem({ id, name, expiration, amount, handleDelete, setUpdate}){
    const [isEditing, setIsEditing] = useState(false);
    //const [typeEditing, setTypeEditing] = useState("");
    const [changedName, setChangedName] = useState(name);
    const [changedExpiration, setChangedExpiration] = useState(expiration);
    const [changedAmount, setChangedAmount] = useState(amount);

    //let daysToExpiration = toDaysUntil(expiration);
    console.log("updatedlist");

    const saveEdit = () => {
        setIsEditing(false);
        console.log("in save edit");
        setUpdate(id, changedName, changedExpiration, changedAmount);
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
                    <button className='edit_item_button' onClick={() => saveEdit()}>Save</button>
                </div>
            </div>
        );
    }

  return (
      <div className="inventory_container">
        <div className="inventory_name">
            <p>{name}</p>
        </div>
        <div className="inventory_expiration">
            <p>{expiration}</p>
        </div>
        <div className="inventory_amount">
            <p>{amount}</p>
        </div>
        <div className="inventory_edit">
            <button className='edit_item_button' onClick={() => setIsEditing(true)}>Edit</button>
            <button className='delete_item_button' onClick={()=>handleDelete(id)}>Delete</button>
        </div>
    </div>
  );
}
export default InventoryListItem;