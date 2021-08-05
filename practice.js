// const htmlcollections = document.getElementsByClassName("item");
// const nodelist = document.querySelectorAll(".item");
// const todolist = document.getElementById("todolist");
// const todonr = document.getElementsByClassName("todoNr")[0];
// console.log(todonr);

// const newitem = document.createElement("li");
// console.log(htmlcollections);
// newitem.classList.add("item");
// newitem.innerText = "Item 3";

// todolist.appendChild(newitem);

// const anotheritem = document.createElement("li");
// console.log(htmlcollections);
// anotheritem.classList.add("item");
// anotheritem.innerText = "Item 4";

// todolist.appendChild(anotheritem);

// todonr.innerText = htmlcollections.length;
// console.log(todonr);

const todolist = document.querySelector("#todolist");
const button = document.querySelector("#submit");
const maintitle = document.querySelector(".maintitle");
const items = todolist.children;
console.log(items);
button.addEventListener("click", function () {
  const newitem = document.createElement("li");
  const todonr = document.querySelector(".todoNr b");
  console.log(todonr);
  newitem.classList.add("item");
  //newitem.innerText = "Item 3";
  todolist.appendChild(newitem);
  console.log(newitem);
  const htmlcollections = document.querySelectorAll(".item");
  todonr.innerText = htmlcollections.length;
  newitem.innerText = "Item " + htmlcollections.length;
  //newitem.innerText = htmlcollections.length;
  newitem.addEventListener("click", deleteitem);
});

// button.addEventListener("click", function () {
//   maintitle.classList.toggle("colorchange");
// });

for (item of items) {
  item.addEventListener("click", deleteitem);
}

function deleteitem(e) {
  e.target.remove();
}
