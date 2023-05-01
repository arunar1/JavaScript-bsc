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
// console.log(tshirtDisplayName);

//function 

// function getThirdUmpire(a){
//     a&&umpair(a);

// }
// function umpair(a){
//     console.log(a);
// }
// getThirdUmpire("out");
// getThirdUmpire("NOTout");
// getThirdUmpire(10);
// getThirdUmpire();


const display=document.getElementById("display-screen");

// function getUmpair(decision){
//     // let decision=decision;
//     let screenDisplay=decision&&displayFinelDecision(decision);
//     if(screenDisplay){
//         setTimeout(()=>{
//             display.innerText='';
//         },4000)
//     }
// }

// function displayFinelDecision(decision){
//     display.innerText=decision.toUpperCase();
//     return true;
// }

// getUmpair("Not out");

let camerAngle=[];

function umpireReview(groundUmpireReq,callbackFn){
    if(!groundUmpireReq) return
    groundUmpireReq&&callbackFn();
    //array destructuring

    const [camerAngle1Result,camerAngle2Result]=camerAngle;
    console.log(camerAngle1Result);
    console.log(camerAngle2Result);
    // camerAngle1Result?displayMessage("out"):displayMessage("not out");
    camerAngle1Result&&camerAngle2Result?displayMessage("out"):displayMessage("not out");
}

function displayMessage(message){
    display.innerHTML=message.toUpperCase();
}

function getThirdUmpire(){
    let decision=prompt("Enter the decsion");
    decision=decision.toLowerCase();
    decision=(decision==="out")?true:false;
    camerAngle.push(decision);
    console.log(camerAngle);
    return decision;

}

function checkCamera1(){
   getThirdUmpire()
}

function checkCamera2(){
   getThirdUmpire();
}



umpireReview(true,checkCamera1);
umpireReview(true,checkCamera2);

// console.log(camerAngle);