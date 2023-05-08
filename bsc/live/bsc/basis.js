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

// let playerFirstName
// let playerMidName
// let playerLastName

// let tshirtDisplayName=playerFirstName??playerMidName??playerLastName??"please provide a name";

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


// const display=document.getElementById("display-screen");

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

// let camerAngle=[];

// function umpireReview(groundUmpireReq,callbackFn){
//     if(!groundUmpireReq) return
//     groundUmpireReq&&callbackFn();
//     //array destructuring

//     const [camerAngle1Result,camerAngle2Result]=camerAngle;
//     console.log(camerAngle1Result);
//     console.log(camerAngle2Result);
//     // camerAngle1Result?displayMessage("out"):displayMessage("not out");
//     camerAngle1Result&&camerAngle2Result?displayMessage("out"):displayMessage("not out");
// }

// function displayMessage(message){
//     display.innerHTML=message.toUpperCase();
// }

// function getThirdUmpire(){
//     let decision=prompt("Enter the decsion");
//     decision=decision.toLowerCase();
//     decision=(decision==="out")?true:false;
//     camerAngle.push(decision);
//     console.log(camerAngle);
//     return decision;

// }

// function checkCamera1(){
//    getThirdUmpire()
// }

// function checkCamera2(){
//    getThirdUmpire();
// }



// umpireReview(true,checkCamera1);
// umpireReview(true,checkCamera2);

// console.log(camerAngle);



//arrow function

// const display=document.getElementById('display-screen');


// const showMessage=(element)=>{
//     console.log(this);
// }

// display.addEventListener('click',showMessage)  


// function getThirdUmpire(){
//     console.log(this);
// }

// const getThirdUmpire2=function(){
//     console.log(' not out');
// }

// getThirdUmpire();
// getThirdUmpire2();


// const getThirdUmpire5=()=>{
//     console.log("who are you?")
// }
// getThirdUmpire5();

// var atitle='welcome sir';
// const ampleObj={
//     title:'welcome ',
//     age:3,
//     showMessage:()=>{
//         console.log(this);
//     }
// }
// ampleObj.showMessage();

// objects

//data type

// 7 primitve data type===>string num boolean bigint symbols undefined null

//  const channel={
//     channelName:"sports world",
//     age:1,
//     topic:['football','cricket']
// }
// //dot notation
// channel.subscriber=100;
// channel.owner='arun';

// //bracket notation
// console.log(channel['channelName']);

// channel['newseries']='champion club';

// console.log(channel.newseries);
// console.log(channel)


// const profile=["lumba","chukkuru"]
// const [kali,kanu]=profile;
// console.log(kali);
// console.log(kanu);

//delete object

// delete channel.channelName;
// console.log(channel);

// const isAward='anyA';
// channel [isAward]='no';
// console.log(channel)




// console.log(channel);

//creating a object using function


// function newObj(channelId,year){
//     return(
//         name:channelId,
//         age :year

//     )
// }


// newObj('web',2);

// const channel={
//     channelName:"sports world",
//     age:1,
//     topic:['football','cricket'],
//     channelMessage:function(){
//         console.log("like share and subscribe")
//     }
// }
// for(key in channel){
//     console.log(channel[key]);
// }

// console.log(Object.values(channel));

//array

// const channelTopics=['html','css','javascript'];

// console.log(channelTopics.length);

// console.log(channelTopics[0]);

// for(i=0;i<channelTopics.length;i++){
//     console.log(channelTopics[i]);
// }

// for(topic in channelTopics)
// {
//     console.log(channelTopics[topic]);
// }


// channelTopics.push('react');

// channelTopics.pop();

// channelTopics.shift();

// channelTopics.unshift()

// console.log(channelTopics)


//splice and slice

// channelTopics.splice(0,0 );//cut cheyth kalayuka

// newArray=channelTopics.slice();
// console.log("new array",newArray)

// console.log(channelTopics)


//array iteration using loop
//in and of concept in the iteration for loop

// for(let top of channelTopics)
// {
//     console.log(top);
// }

// let screenEl=document.getElementById("display-screen");
// let umpireDesion;
// const TimeOut=10000;
// console.log("1.review started by ground umpire");

// function getThirdUmpireResult(){
//     console.log("2.Third umpire review started")
//     console.log("3.Third umpire is checking camera");
//     setTimeout(()=>{
//         umpireDesion="out";
//         console.log(`4.Third umpire decision is ${umpireDesion}`);
//         displayResult();
//     },TimeOut)
    

// }
// function displayResult(){
//     console.log(`5.review is finished :${umpireDesion}`);
//     passInfoGrroundUmpire();
//     screenEl.innerText=umpireDesion
// }

// function passInfoGrroundUmpire(){
//     console.log("please revert your decision");
// }


// getThirdUmpireResult(displayResult,passInfoGrroundUmpire)


// let districts=['kollam','kannur','kozzhikode','waynad','malapuram'];

// const listEl=document.querySelector('.districts');
// listEl.appendChild()

// districts.map((district)=>{
//     console.log(district);
    


// })

// var test=document.getElementById('header');
// const num1=prompt("ENter the numbwer");
// const num2=prompt("Enter the second num:")
// const num3=Number(num1)+Number(num2);
// test.innerHTML=num3;
// test.style.backgroundColor='red';
// test.style.color='green'

// document.getElementsByClassName('header')[0].innerHTML="new";

// document.getElementsByTagName('h1')[2].innerHTML='hello';

// document.getElementById('header').style.fontSize="30px";




// function myFun(){
//     console.log("welcom");
// }

// myFun();


// function with argumrnt

// function sum(a,b){
//     console.log(a+b);
// }

// sum(10,2);

// if(true){
//     alert("welcome sir");
// }

// let age=2;
// if(age>18){
//     console.log("hello welcome to the world of web development");

// }
// else{
//     console.log("not welcome tothe world of web development");
// }

// let fruit='banana';

// switch(fruit){
//     case "apple":
//         console.log("apple");
//         break;
//     case 'banana':
//         console.log("fruit is babnan");
//         break;
//     default:
//         console.log("not a fruit");
// }

// for(let i=0;i<10;i++){
//     console.log(i);
// }
// var i=10
// while(i<20){
//     console.log(i);
//     if(i==15){
//         break;
//     }
//     i++;
// }

//for of

// myArray=["arun","developer"];

// for(let x of myArray){
//     console.log(x);
// }

//for in

// let muObj={
//     name:'arun',
//     age:21
// }

// for(let y in muObj){
//     console.log(muObj.y);
// }

// //event

// function onAlert(){
//     alert("you have clicked");
// }

// let btn1=document.querySelector('.btn');

// btn1.addEventListener('click',onAlert);

//spread operator

// const globelPlayer={
//     name:'hero1',
//     age:23
// }
// const player1=Object.assign(globelPlayer);

// console.group(player1);
// player1.name='arun';
// console.log(globelPlayer);

// const player3={
//     name:'anu',
//     age:10
// }
// top pass the copy

//concatenation using the spred operator


// const worldPlayer=['ammu','sreedevi','allika'];

// const BigBoss=['Akhil marar','shoba','sruthi','reneesh'];

// const players=[...BigBoss,...worldPlayer];

// console.log(players);

// const {name,...rest }=globelPlayer;
// console.log(name);
// console.log(rest);


// const myFunc=(a)=>{
//     alert(a)
// }

// myFunc(4);

//foreach method

 const globelPlayer=[
    {
        name:'manu',
        age:20,
        place:'kollam',
        company:{
            name:"volvox",
            year:2020
        }
    },
    {
        name:"monkit",
        age:6,
        palce:'thrissur'
    },
    {
        name:'Super',
        age:23,
        place:"vettoor"
    }
];
// console.log(globelPlayer);

// for(let i=0;i<globelPlayer.length;i++)
// {
//     console.log(globelPlayer[i]);
// }

// globelPlayer.forEach((value,index,array)=>{
//     console.log(value.name);
//     console.log(globelPlayer[index].age);
//     console.log(array);

// })

//map

const newAArry=globelPlayer.map((value)=>{
    return value.name;
})

console.log(newAArry)

//aray destructuring

//filter method

 const newPeople=globelPlayer.filter((value)=>{
    return value.age>19 && value.name=='manu';
 })

 console.log(newPeople);

 let total=0;

 let numberArray=[23,32,54,65,6,3,35,6,78,9]; 
 for(let i=0;i<numberArray.length;i++){
    total=total+Number(numberArray[i]);
 }
 console.log(total);


 //find method

 //return only one object

 const newObj=globelPlayer.find((value)=>{
    return value.name=='monkit';
 });
 console.log(newObj);

 //sort method


 const SortedNum=numberArray.sort((a,b)=>{
    return a-b;
 });
 console.log(numberArray);
 console.log(SortedNum);


 //flat  method for nested array in single array


 const obj=globelPlayer.find((value)=>{
    return value.company;
 })
 console.log(obj)
  

 const numberGrater=numberArray.map((value)=>{
    return value;
 });
numberGrater.filter

 console.log(numberGrater);
