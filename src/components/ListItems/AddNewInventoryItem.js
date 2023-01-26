import React, {useState} from 'react';
import checkImage from "../../Images/check.png"

function AddNewInventoryItem(){
    const [isEditing, setIsEditing] = useState(false);
    const [changedName, setChangedName] = useState("");
    const [changedExpiration, setChangedExpiration] = useState("");
    const [changedAmount, setChangedAmount] = useState("");

    const saveNewItem = () => {
        console.log("saving");
    }

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
                    <div title="Save changes" className="edit_item_button" onClick={()=>saveNewItem()}><img src={checkImage} alt="edit" height="35px"/></div>
                </div>
            </div>
    );
}

export default AddNewInventoryItem;