import React, {useState} from 'react';
import checkImage from "../../Images/check.png"
import cancelImage from "../../Images/cancel.png"

function AddNewInventoryItem({saveNew, type, setIsAddingNew}){
    //useStates are almost like variables in React, but the great thing about them is
    //that they can track changes. if you want the value from a useState you use the 
    //first parameter (e.g. changedName), if you want to change the value you use the 
    //second paramenter (e.g. setChangedName). This is also the most common way to name
    //the paramenters with the name and the set in front of the name. 
    const [changedName, setChangedName] = useState("");
    const [changedExpiration, setChangedExpiration] = useState(null);
    const [changedAmount, setChangedAmount] = useState("");

    const saveNewItem = () => {
        //here should call the addItem function and pass the right parameters the save button will work for now it will not save the new item 
        console.log(changedExpiration);
        //console.log(changedExpiration.toLocaleDateString("en-US"));
        saveNew(changedName, changedExpiration, changedAmount);
    }

    const cancel = () => {
        setIsAddingNew(false);
    }

    return(
        <div className="inventory_container_edit">
            {/* Here is the form for adding a new item, when the value inside the input
                field change I set the value to the correct useState.*/}
                <div className="inventory_name">
                    <input type="text" 
                    required
                    className="textInput" 
                    value={changedName}
                    onChange={(e)=>setChangedName(e.target.value)
                    }/>
                </div>
                {type === "Shoppinglist" ? (null) : <div className="inventory_expiration">
                    <input type="date"  
                        className="textInput" 
                        
                        onChange={(e)=>setChangedExpiration(e.target.value)}/>
                </div>}
                <div className="inventory_amount">
                    <input type="number"
                        required
                        className="textInput" 
                        value={changedAmount}
                        onChange={(e)=>setChangedAmount(e.target.value)}/>
                </div>
                <div className="inventory_input_edit">
                    <div title="Save changes" className="edit_item_button" onClick={()=>saveNewItem()}><img src={checkImage} alt="edit" height="35px"/></div>
                    <div title="Cancel changes" className="edit_item_button" onClick={()=>cancel()}><img src={cancelImage} alt="edit" height="35px"/></div>
                </div>
            </div>
    );
}

export default AddNewInventoryItem;