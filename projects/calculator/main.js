"use strict";
const result = document.querySelector(".div1");
const numbers = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const equals = document.querySelector(".div16");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
const root = document.querySelector(".root");
let string = "";

//Display
const display = function (str) {
  result.textContent = str;
};

//Functions
const equalFun = function () {
  if (string != "") {
    display(`${eval(string)}`);
    string = `${eval(string)}`;
  } else {
    display("0");
  }
};
const clearFun = function () {
  string = "";
  display("0");
};
const delFun = function () {
  string = string.slice(0, -1);
  display(string);
};
//Numbers
for (const x of numbers) {
  x.addEventListener("click", function () {
    string += x.textContent;
    display(string);
  });
}
//Operations
equals.addEventListener("click", equalFun);
clear.addEventListener("click", clearFun);
del.addEventListener("click", delFun);

for (const y of operation) {
  y.addEventListener("click", function () {
    string += y.textContent;
    display(string);
  });
}
root.addEventListener("click", function () {
  if (string != "") {
    display(`${Math.sqrt(eval(string)).toFixed(3)}`);
    string = `${Math.sqrt(eval(string)).toFixed(3)}`;
  } else {
    display("0");
  }
});

//Keyboard control
document.addEventListener("keydown", function (key) {
  if (key.key in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
    string += key.key;
    display(string);
  }
  if (key.key === "+" || key.key === "-" || key.key === "*" || key.key === "/" || key.key === ",") {
    string += key.key;
    display(string);
  }
  if (key.key === "Enter") {
    equalFun();
  }
  if (key.key === "c") {
    clearFun();
  }
  if (key.key === "Backspace") {
    delFun();
  }
});
