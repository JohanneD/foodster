//This file include 2 helper functions, the toDaysUntil which computes how many days
//the expiration date is from todays date.
  function toDaysUntil(expiration){
    const current = new Date();
    let diffDays = "";
    if (expiration !== "" && expiration !== null){
        const date1 = new Date(expiration);
        const date2 = new Date(`${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`);
  
        if (date2.toLocaleDateString("en-US")===date1.toLocaleDateString("en-US")){
          return "0";
        }else{
          const diffTime = Math.abs(date2 - date1);
  
          diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          if (date2>=date1){
            return "-" + diffDays;
          }
        }
        
    };
    return diffDays-1;
  }

//and the sortInventory which sort the list items according to the type we pass in
  function sortInventory(type, list){
    //sorting
    let foodFridge = list.sort((a, b) => {
    if (type === "expiration"){
        if (parseInt(toDaysUntil(a.expiration)) < parseInt(toDaysUntil(b.expiration))) {
            return -1;
          }
    }else if(type === "name"){
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
    }else if(type === "amount"){
        if (parseInt(a.amount) < parseInt(b.amount)) {
            return -1;
          }
    }
    
    return 1;
  });
  return foodFridge;
  }

  //this is how you export multple components from a file in react 
  //if you only want to export one you usually use export default <name of func>
  export {toDaysUntil,sortInventory};