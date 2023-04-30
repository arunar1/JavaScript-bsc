// let isRainingToday=true;

// let isMatchToday;


// if(isRainingToday)
// {
//     isMatchToday="There is no match";
// }
// else{
//     isMatchToday="match today";
// }

// console.log(isMatchToday);

let playerFirstName
let playerMidName
let playerLastName

let tshirtDisplayName=playerFirstName??playerMidName??playerLastName??"please provide a name";

// console.log(tshirtDisplayName);


// let advertisers=true;
// let audience=true;

// let finelDesicion=advertisers&&audience;

// console.log(finelDesicion?"math today":"no match today");


//nullish ??
console.log(tshirtDisplayName);

//function 

function getThirdUmpire(a='no value'){
    console.log(a);

}
getThirdUmpire("out");
getThirdUmpire("NOTout");
getThirdUmpire(10);
getThirdUmpire();