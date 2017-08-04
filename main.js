// grabbing elements

let display = document.getElementById("display");
let numKeys = document.getElementsByClassName("keys");
let operators = document.getElementsByClassName("operator")

// added Event Listeners to clear and eval

let clear = document.getElementById("clear");
clear.addEventListener("click", clearClicked);

let total = document.getElementById("eval");
total.addEventListener("click", evalClicked);



function operatorClicked(event) {

  if (event.target.innerHTML === "X") {
    event.target.innerHTML = "*";
    display.textContent += event.target.innerHTML;
  } else {
  display.textContent += event.target.innerHTML;
  }
}

function numberClicked(event) {
  display.textContent += event.target.innerHTML;
}

function clearClicked(event) {
  display.textContent = '';
}

function evalClicked(event) {
  display.textContent = eval(display.textContent);
}


for (var i = 0; i < numKeys.length; i++) {
  numKeys[i].addEventListener("click", numberClicked);
}
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", operatorClicked);
}
