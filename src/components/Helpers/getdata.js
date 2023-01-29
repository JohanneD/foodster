/* This function gets the data from the JSON fiels */
const getData=(url, key)=>{
    fetch(url
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        /* Here i check if localStorage for the different key is empty, as i do not want
        to change the localStorage if i have already added the list, as i want to keep 
        the storage as it is when we refresh. */
        
        if (!localStorage.getItem(key)){
          localStorage.setItem(key, JSON.stringify(myJson));
          //console.log(JSON.parse(localStorage.getItem(key)))
        }
      });
  }

  export default getData;