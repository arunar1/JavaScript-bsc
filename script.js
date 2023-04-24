let input = document.getElementById("kitchen-input");

let button = document.getElementById("add-btn");

let list = document.getElementById("kitchen-item-list");

let button1=document.getElementById("kitchen-item-list");

//add item
item = [];
function addItem() {
   let kitchenInput = input.value;
   //create dom element
   if (kitchenInput == '') {
      alert('error');
   }
   else 
   {
      var flag;
      for (let element of item) {
         if (element === kitchenInput) {
            flag = 1;
            break

         }

      }
      if (flag === 1) {
         alert("repeating");


      }
      else {
         item.push(kitchenInput);
         let li = document.createElement('li');
         li.innerText = kitchenInput;

         list.appendChild(li);
         let trashBtn=document.createElement('button');
         
         //added class name
         trashBtn.classList.add("fatrash");
         console.log(trashBtn);

         trashBtn.innerText='delete';
         button1.appendChild(trashBtn);
         input.value = '';
         input.focus();
         // console.log(item);
         
      }

   }






}
function deleteItem(event){
   alert(event);
   // console.log(event.target.classList[0]);
   if(event.target.classList[0]==='fatrash')
   {
     let item1=event.target.parentElement;
     console.log(item1);
     item1.remove();
   }

}








button.addEventListener("click", addItem);
 button1.addEventListener('click',deleteItem);