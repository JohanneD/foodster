/* This is the update function, here i look for the id of the item to know which item
  to edit. Also added in a switch case for the different list types. And then 
  update the correct localStorage  */
  const setUpdate = (list, setlist, id, name, expiration, amount, type) => {
    let newList = [];
    newList = [...list];
    if (type === "Shoppinglist"){
        list.forEach((item, index) => {
            if (item.id === id) {
              newList[index] = {
              id: id,
              name: name,
              amount: amount
                }
              }
            }
            )
    }else {
        list.forEach((item, index) => {
            if (item.id === id) {
              newList[index] = {
              id: id,
              name: name,
              expiration: expiration,
              amount: amount
                }
              }
            }
            )
    }

    /*switch (key) {
      case "Fridge":
        newList = [...listInventoryFridge]
        listInventoryFridge.forEach((item, index) => {
        if (item.id === id) {
          newList[index] = {
          id: id,
          name: name,
          expiration: expiration,
          amount: amount
            }
          }
        }
        )
        setListInventoryFridge(newList);
        break;
      case "Freezer":
        newList = [...listInventoryFreezer]
        listInventoryFreezer.forEach((item, index) => {
        if (item.id === id) {
          newList[index] = {
          id: id,
          name: name,
          expiration: expiration,
          amount: amount
            }
          }
        }
        )
        setListInventoryFreezer(newList);
        break;
      case "Cabinet":
        newList = [...listInventoryCabinet]
        listInventoryCabinet.forEach((item, index) => {
        if (item.id === id) {
          newList[index] = {
          id: id,
          name: name,
          expiration: expiration,
          amount: amount
            }
          }
        }
        )
        setListInventoryCabinet(newList);
        break;
      default:
        break;
    }*/
    setlist(newList);
    localStorage.setItem(type, JSON.stringify(newList));
  }

  export default setUpdate;