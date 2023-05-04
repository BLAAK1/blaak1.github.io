const menuBtn = document.querySelector(".menuBtn");
const hiddenMenu = document.querySelector(".hiddenMenu");
const mainContent = document.querySelector(".mainContent");
menuBtn.addEventListener("click", () => {
  hiddenMenu.classList.toggle("hidden");
  mainContent.classList.toggle("hidden");
});
