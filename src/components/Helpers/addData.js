function getNextId(obj) {
    return (Math.max.apply(Math, obj.map(function(o) {
      return o.id;
    })) + 1);
};

function addItem(list, setlist, name, expiration, amount, type){
    let newList = [...list];
    if (type === "Shoppinglist") {
        newList.push({
            id: getNextId(list),
            name: name,
            amount: amount
        });
    }else {
        newList.push({
            id: getNextId(list),
            name: name,
            expiration: expiration,
            amount: amount
            });
    }
    setlist(newList);
    localStorage.setItem(type, JSON.stringify(newList));
};

export default addItem;