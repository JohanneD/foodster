import React from 'react';
import InventoryListItem from '../ListItems/inventoryListItem';
import { foodInventoryFridge } from "./../../data/foodInventoryFridge.js";
import "./../../styles/Tabs/tabs.css";

function toDaysUntil(expiration){
  const current = new Date();
  var diffDays = "";
  if (expiration !== ""){
      const date1 = new Date(expiration.split('/').reverse().join('-'));
      const date2 = new Date(`${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`);

      if (date2.toLocaleDateString("en-US")===date1.toLocaleDateString("en-US")){
        diffDays = "0";
      }else{
        const diffTime = Math.abs(date2 - date1);

        diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (date2.toLocaleDateString("en-US")>=date1.toLocaleDateString("en-US")){
          diffDays = "-" + diffDays;
        }
      }
      
  };
  return diffDays;
}


function Fridge(){
  //sorting
  /*var foodFridge = foodInventoryFridge.sort((a, b) => {

    if (toDaysUntil(a.expiration) < toDaysUntil(b.expiration)) {
      return -1;
    }
    return 1;
  });*/

  return (
    <div className="fridge">
      {foodInventoryFridge.map((data, key) => {
          return (
            <InventoryListItem key={key} id={data.id} name={data.name} expiration={toDaysUntil(data.expiration)} amount={data.amount} />
          );
        })}
    </div>
  );
}
export default Fridge;