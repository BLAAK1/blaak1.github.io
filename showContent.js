"use strict";
const homeBtn = document.querySelector(".homeBtn");
const experienceBtn = document.querySelector(".experience");
const content = document.querySelector(".mainContent--right");

function showHomePage() {
  const myPromise = new Promise(() => {});

  const displayHomePage = function () {
    content.innerHTML = "";
    content.insertAdjacentHTML(
      "afterbegin",
      `<div class="aboutMe card">
      <h3>O mnie</h3>
      <p>
        Jestem studentem Wyższej Szkoły Informatyki i Zarządzania w Rzeszowie, którego celem jest zostać front-end developerem. Dobrze znam HTML i CSS oraz JavaScript. Chcę rozwijać się w
        technologii Java Script oraz PHP. Moje zalety to umiejętność pracy w zespole, szybkie uczenie się oraz pracowitość i zaangażowanie.
      </p>
    </div>
    <div class="tech">
      <div class="card learn">
        <h3>Technologie, których się uczę</h3>
        <ul class="allTech"></ul>
      </div>
      <div class="card programs">
        <h3>Oprogramowanie, które znam</h3>
        <ul class="allPrograms"></ul>
      </div>
    </div>`
    );
  };

  // TECH
  const JS = {
    name: "JavaScript",
    knowledge: "Dobrze",
    progressBar: 50,
  };
  const HTML = {
    name: "HTML",
    knowledge: "Bardzo dobrze",
    progressBar: 70,
  };
  const CSS = {
    name: "CSS",
    knowledge: "Bardzo dobrze",
    progressBar: 70,
  };
  const PHP = {
    name: "PHP",
    knowledge: "Podstawy",
    progressBar: 20,
  };
  const SQL = {
    name: "SQL",
    knowledge: "Podstawy",
    progressBar: 20,
  };
  // PROGRAMS
  const WINDOWS = {
    name: "Windows",
    knowledge: "Zaawansowane",
    progressBar: 90,
  };
  const OFFICE = {
    name: "Pakiet MS Office",
    knowledge: "Bardzo dobrze",
    progressBar: 60,
  };
  const LINUX = {
    name: "Linux",
    knowledge: "Dobrze",
    progressBar: 40,
  };

  const PREMIERPRO = {
    name: "Adobe Premier Pro",
    knowledge: "Podstawy",
    progressBar: 20,
  };
  const PHOTOSHOP = {
    name: "Adobe Photoshop",
    knowledge: "Podstawy",
    progressBar: 15,
  };

  const allTech = [SQL, PHP, JS, CSS, HTML];
  const allPrograms = [PHOTOSHOP, PREMIERPRO, LINUX, OFFICE, WINDOWS];

  // DISPLAY
  const display = function (list, el) {
    el === "learn" ? (el = document.querySelector(".allTech")) : (el = document.querySelector(".allPrograms"));
    el.innerHTML = "";

    list.forEach((e) => {
      const pattern = `<li>
                <div class="name">
                  <div class="techName">
                    <h4>${e.name}</h4>
                  </div>
                  <div class="knowledge">
                    <p>${e.knowledge}</p>
                  </div>
                </div>
                <div class="progressBar">
                  <div class="progressBar--inner" style="width: ${e.progressBar}%"></div>
                </div>
              </li>`;
      el.insertAdjacentHTML("afterbegin", pattern);
    });
  };

  myPromise.then(displayHomePage()).then(display(allTech, "learn")).then(display(allPrograms, "programs"));
}
showHomePage();

homeBtn.addEventListener("click", showHomePage);
experienceBtn.addEventListener("click", () => {
  content.innerHTML = "";
});
function showExperience() {
  content.innerHTML = "";
}
