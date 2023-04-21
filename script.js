

let curryPowder=['salt',"pepper","chill","turmeric"];


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
curryPowder.forEach((element,position) => {
   let li=document.createElement('li');
   li.innerText= `(${position+1})  ${element}`;
   kitchenItem.appendChild(li);
   
});   



// let liItem=document.querySelectorAll('li');
// let powderArray=[];

// liItem.forEach(element => {
//    let liList=element.innerText;
//    powderArray.push(liList);
// });

// console.log(powderArray);