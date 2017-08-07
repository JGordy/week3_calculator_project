// grabbing elements

let display = document.getElementById("display");
let numKeys = document.getElementsByClassName("keys");
let operators = document.getElementsByClassName("operator");
let para = document.getElementsByClassName("para");

// added Event Listeners to clear and eval

let clear = document.getElementById("clear");
clear.addEventListener("click", clearClicked);

let total = document.getElementById("eval");
total.addEventListener("click", evalClicked);

let modulo = document.getElementById("modulo");
modulo.addEventListener("click", modClicked);

let root = document.getElementById("root");
root.addEventListener("click", rootClicked);

// funtions for operators

function operatorClicked(event) {

  if (para.textContent === "") {
    para.textContent = "";
  } else if (para.textContent.includes("=")) {
    //  do nothing
  } else if ((para.textContent.endsWith("+ ")) ||
              (para.textContent.endsWith("- ")) ||
              (para.textContent.endsWith("* ")) ||
              (para.textContent.endsWith("/ "))) {
      para.textContent = para.textContent;
  } else if (event.target.innerHTML === "X") {
    para.textContent += " " + "*" + " ";
  } else {
    para.textContent += " " + event.target.innerHTML + " ";
  }
}

function modClicked(event) {

  if (para.textContent.includes("=")) {
    // do nothing
  } else if (para.textContent == "") {
    //  do nothing
  } else {
    para.textContent += " " + event.target.innerHTML + " ";
  }
}

function rootClicked(event) {

if (para.textContent.includes("=")) {
  // do nothing
} else if (para.textContent == "") {
  // do nothing
} else if (Math.sqrt(para.textContent) != parseInt(Math.sqrt(para.textContent))) {

    para.textContent += " " + event.target.innerHTML + " " + "=" + " " + Math.sqrt(para.textContent).toFixed(6);

} else {

  para.textContent += " " + event.target.innerHTML + " " + "=" + " " + Math.sqrt(para.textContent)
  }
}

// Number and decimal function

function numberClicked(event) {

  if (para.textContent.includes("=")) {
    // do nothing
  } else {
    para.textContent += event.target.innerHTML;
  }
}

// Clear function

function clearClicked(event) {

  if (para.textContent != "") {
    para = document.createElement("p");
    display.prepend( para );

  } else {
    para.textContent = "";
  }
}

// function for evaluation

function evalClicked(event) {

  if (para.textContent == "") {
    // do nothing
  } else {
      para.textContent = para.textContent + " " + "=" + " " + eval(para.textContent);
  }
}

// add event listeners to keys and operators

for (var i = 0; i < numKeys.length; i++) {
  numKeys[i].addEventListener("click", numberClicked);
}
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", operatorClicked);
}
