const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    effect: 'fade',
    speed:5000,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    // autoplay:{
    //     delay:1000,
    // }
  });

//   var swiper = new Swiper(".Swiper", {
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     pagination: {
//             el: '.swiper-pagination',
//           },
// autoplay:{
//   delay:1000,
// }
//   });

//mobile menu

let mobileMenu=document.querySelector("header .fa-bars");
// console.log(mobileMenu);

let menu=document.querySelector(".menu");

mobileMenu.addEventListener('click',openMenu);

function openMenu(){
  menu.classList.toggle('open');
}