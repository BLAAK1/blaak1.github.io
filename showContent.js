"use strict";
const homeBtn = document.querySelector(".homeBtn");
const experienceBtn = document.querySelector(".experience");
const content = document.querySelector(".mainContent-content");

//// DATA START ////
//     TECH    //
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

//     PROGRAMS    //
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

//     LANGUAGES   //
const ENGLISH = {
  classname: "emglish",
  name: "Angielski",
  knowledge: "Dobrze (B1)",
  img: "../content/flags/en.png",
};
const POLISH = {
  classname: "polish",
  name: "Polski",
  knowledge: "Narodowy",
  img: "../content/flags/pl.png",
};
const RUSIAN = {
  classname: "rusian",
  name: "Rosyjski",
  knowledge: "Podstawy",
  img: "../content/flags/ru.png",
};

const Languages = [RUSIAN, ENGLISH, POLISH];
const allTech = [SQL, PHP, JS, CSS, HTML];
const allPrograms = [PHOTOSHOP, PREMIERPRO, LINUX, OFFICE, WINDOWS];
// DATA END

// MAIN HOMEPAGE FUNC START
function showHomePage() {
  const myPromise = new Promise(() => {});

  const displayHomePage = function () {
    content.innerHTML = "";
    content.insertAdjacentHTML(
      "afterbegin",
      `<div class="aboutMe card">
      <h3>O mnie</h3>
      <p>
        Jestem studentem Wyższej Szkoły Informatyki i Zarządzania w Rzeszowie, którego celem jest zostać FullStack developerem. Dobrze znam HTML i CSS oraz JavaScript. Chcę rozwijać się w
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
    </div>
    <div class="myLanguages">
    <div class="lang-start">
      <h3>Jakie znam języki?</h3>
    </div>
    <div class="languages">
    </div>
  </div>`
    );
  };
  // DISPLAY TECH/PROGRAMS START
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
  // DISPLAY TECH/PROGRAMS END
  // DISPLAY LANGUAGES START
  const displayLang = function (list) {
    const langBox = document.querySelector(".languages");
    langBox.innerHTML = "";
    list.forEach((e) => {
      const pattern = `
      <div class="lang ${e.classname}">
        <div class="lang-img">
          <img src="${e.img}" alt="${e.classname} flag" />
        </div>
        <div class="lang-name">
          <h3>${e.name}</h3>
          <p>${e.knowledge}</p>
        </div>
      </div>`;
      langBox.insertAdjacentHTML("afterbegin", pattern);
    });
  };
  // DISPLAY LANGUAGES END
  myPromise.then(displayHomePage()).then(display(allTech, "learn")).then(display(allPrograms, "programs")).then(displayLang(Languages));
}
showHomePage();
homeBtn.addEventListener("click", showHomePage);
// MAIN HOMEPAGE FUNC END
// MAIN EXPERIENCE FUNC START
experienceBtn.addEventListener("click", () => {
  content.innerHTML = "";
});
function showExperience() {
  content.innerHTML = "";
}
// MAIN EXPERIENCE FUNC END
