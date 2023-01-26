
  function toDaysUntil(expiration){
    const current = new Date();
    let diffDays = "";
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


  function sortInventory(type, list){
    //sorting
    let foodFridge = list.sort((a, b) => {
    if (type === "expiration"){
        if (toDaysUntil(a.expiration) < toDaysUntil(b.expiration)) {
            return -1;
          }
    }else if(type === "name"){
        if (a.name < b.name) {
            return -1;
          }
    }else if(type === "amount"){
        if (a.amount < b.amount) {
            return -1;
          }
    }else if(type === "id"){
        if (a.id < b.id) {
            return -1;
          }
    }
    
    return 1;
  });
  return foodFridge;
  }

  export {toDaysUntil,sortInventory};