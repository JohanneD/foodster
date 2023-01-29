import {sortInventory} from "./HelperFunc.js";

/* this funcion sorts the list on the name and here is a case on type so i know
  which list to sort */
function sortItems(list, setlist, name, type){
    let newList = [];
    newList = [...list];
    newList = sortInventory(name, newList);
    setlist(newList);
    localStorage.setItem(type, JSON.stringify(newList));
    /*switch (type) {
      case "Fridge":
        newList = [...listInventoryFridge];
        newList = sortInventory(name, newList);
        setListInventoryFridge(newList);
        break;
      case "Freezer":
        newList = [...listInventoryFreezer];
        newList = sortInventory(name, newList);
        setListInventoryFreezer(newList);
        break;
      case "Cabinet":
        newList = [...listInventoryCabinet];
        newList = sortInventory(name, newList);
        setListInventoryCabinet(newList);
        break;
      default:
        break;
    }*/
  };

  export default sortItems;