

let curryPowder=['salt',"pepper","chill","turmeric"];


let kitchenItem=document.getElementById("kitchen-item");
// console.log(curryPowder)

console.log(kitchenItem);




for(let powder of curryPowder){
   let li= document.createElement('li');
   li.innerText=powder;
   kitchenItem.appendChild(li);
   console.log(li);
}

