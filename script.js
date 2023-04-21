

let curryPowder=['salt',"pepper","chill","turmeric","sugar"];


let kitchenItem=document.getElementById("kitchen-item");
// console.log(curryPowder)

console.log(kitchenItem);


// method-2

// for(let powder of curryPowder){
//    let li= document.createElement('li');
//    li.innerText=powder;
//    kitchenItem.appendChild(li);
//    console.log(li);
// }



// method-2

curryPowder.forEach(element => {
   let li=document.createElement('li');
   li.innerText=element;
   kitchenItem.appendChild(li);
   
});