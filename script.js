// // LocalStorage: ukládáme data setItem, getItem, removeItem, clear
// // Přidání položky
// localStorage.setItem("location", "České Budějovice");

// localStorage.setItem("firstName", "David");

// // Získání položky
// console.log(localStorage.getItem("location"));

// // // Smazání položky
// localStorage.removeItem("location");
// localStorage.removeItem("firstName");

// // Smazání všeho v localStorage
// localStorage.clear();

// // LocalStorage: JSON a převod na string a zase zpět (stringfy,parse)
// let user = {
//   firstName: "David",
//   age: 23,
// };

// let userJSON = JSON.stringify(user);
// localStorage.setItem("user", userJSON);

// let userFromLS = localStorage.getItem("user");
// let myUser = JSON.parse(userFromLS);

// console.log(`Ahoj já jsem ${myUser.firstName} a je mi ${myUser.age} let.`);
// localStorage.clear();
// LocalStorage: načítáme data z políčka do localStorage

let myArray = [];

let myForm = document.querySelector("#text-form");
myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  myArray.push(event.target.elements.firstName.value);
  myArrayToLs = JSON.stringify(myArray);
  localStorage.setItem("users", myArrayToLs);

  event.target.elements.firstName.value = "";

  let myArrayFromLs = localStorage.getItem("users");
  let myArrayFromLSJSON = JSON.parse(myArrayFromLs);

  let paragraph = document.createElement("p");
  paragraph.textContent = myArrayFromLSJSON[myArrayFromLSJSON.length - 1];
  document.querySelector("#my-users").appendChild(paragraph);
});

let myPresentArray = localStorage.getItem("users");
let myPressentArrayJSON = JSON.parse(myPresentArray);
myPressentArrayJSON.forEach(function (oneUser) {
  let paragraph = document.createElement("p");
  paragraph.textContent = oneUser;
  document.querySelector("#my-users").appendChild(paragraph);
});
