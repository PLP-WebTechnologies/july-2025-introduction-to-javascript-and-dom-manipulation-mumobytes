//Variables
let number = 10;
let isLoggedIn = true;

if (number > 10) {
    console.log("Greater than 5");
} else {
    console.log("Number is 5 or less");
}

if (isLoggedIn) {
    console.log("User is logged in");
} else {
    console.log("User is not logged in");
}

//Functions

function greet(name) {
    return "Hello," + name + "!"
}

console.log(greet("Mike"))

//Loops

let count = 1;
while (count <= 3) {
    console.log("While loop count: " + count);
    count++;
}


for (let i = 1; i <= 5; i++) {
    console.log("For loop count: " + i);
}


//DOM interactions

const title = document.getElementById("title");
const message = document.getElementById("message");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

// DOM interaction 1 & 2: button click changes title and message
btn.addEventListener("click", () => {
  title.textContent = "Place your next order with us.";
  message.textContent = "Welcome!";

  // DOM interaction 3: dynamically create list items
  list.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "YURIS";
    li.textContent = "BMW X5";
    li.textContent = "SUBARU XV";
    list.appendChild(li);
  }
});