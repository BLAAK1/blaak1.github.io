"use strict";
const menuBtn = document.querySelector(".menuBtn");
const mainContent = document.querySelector(".mainContent");
const hiddenMenu = document.querySelector(".hiddenMenu");
const hiddenElement = document.querySelectorAll(".hiddenEl");
menuBtn.addEventListener("click", (e) => {
  hiddenMenu.classList.toggle("hidden");
  mainContent.classList.toggle("hidden");
});

hiddenElement.forEach((e) => {
  e.addEventListener("click", () => {
    hiddenMenu.classList.toggle("hidden");
    mainContent.classList.toggle("hidden");
  });
});
