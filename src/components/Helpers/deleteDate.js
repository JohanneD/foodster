/* This is the delete function, here i look for the id of the item to know which item
  to delete. Also here i add in a switch case for the different list types. And then 
  update the correct localStorage  */
  const handleDelete = (list, setList, id, key) => {
    let newList = [];
    newList = list.filter((item) => item.id !== id);
        setList(newList);
    /*switch (key) {
      case "Fridge":
        newList = listInventoryFridge.filter((item) => item.id !== id);
        setListInventoryFridge(newList);
        break;
      case "Freezer":
        newList = listInventoryFreezer.filter((item) => item.id !== id);
        setListInventoryFreezer(newList);
        break;
      case "Cabinet":
        newList = listInventoryCabinet.filter((item) => item.id !== id);
        setListInventoryCabinet(newList);
        break;
      default:
        break;
    }*/
    localStorage.setItem(key, JSON.stringify(newList));
  }

  export default handleDelete;