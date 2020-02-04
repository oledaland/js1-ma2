// Task 1
let myFunctionExpression = function() {
  console.log("Ole");
};

// Task 2
const button = document.querySelector(".btn");

function callAfterButtonClick() {
  console.log("I was clicked");
}

button.addEventListener("click", callAfterButtonClick);

// Task 3
const firstName = document.querySelector("#firstName");

function callWhenKeyIsPressed(event) {
  console.log(event.target.value);
}

firstName.addEventListener("keydown", callWhenKeyIsPressed);

// Task 4
const buttonMouseOver = document.querySelector("button");
function callOnHover() {
  buttonMouseOver.classList.add("hover");
}

buttonMouseOver.addEventListener("mouseover", callOnHover);

// Task 5
const buttonMouseOut = document.querySelector("[data-animal='dog']");

function callOnNotHover() {
  buttonMouseOver.classList.remove("hover");
}

buttonMouseOut.addEventListener("mouseout", callOnNotHover);

// Task 6
const li = document.querySelectorAll("ul");

function LogValueOfLi() {
  console.log(event.target.value);
}

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("mouseover", LogValueOfLi);
}

// Task 7
const animal = "cow";

let arrayToLoopThrough = [];

switch (animal) {
  case "cat":
    console.log("Meow");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "bird":
    console.log("Tweet");
    break;
  default:
    console.log("Harrumph");
}

// Task 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(names) {
  console.log(names);
});

// Task 9
function logHello() {
  console.log("Hello");

  if (counter === 5) {
    clearInterval(intervalId);
  }
  counter++;
}
let counter = 0;

const intervalId = setInterval(logHello, 500);

// Task 10
const timeoutContainer = document.querySelector("div.container");

function updateDiv() {
  timeoutContainer.innerHTML = "Text updated";
}

setTimeout(updateDiv, 2000);
