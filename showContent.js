"use strict";
const homeBtn = document.querySelector(".homeBtn");
const experienceBtn = document.querySelector(".experienceBtn");
const projectsBtn = document.querySelector(".projectsBtn");
const contactBtn = document.querySelector(".contactBtn");
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
//     EXPERIENCE   //
const job1 = {
  from: "09.2022",
  to: "04.2023",
  name: "Pomoc obsługi klienta",
  employer: "Jarosław Truchan-Szostek",
  city: "Paszczyna",
  description: "Pomoc obsługi klienta na stacji Orlen MOP Paszczyna Północ",
};
const job2 = {
  from: "05.2020",
  to: "06.2020",
  name: "Praktykant",
  employer: `PPHU "Fenix " Kasperek Ryszard`,
  city: "Brzeźnica",
  description: "-Montaż i eksploatacja sieci komputerowej<br>-Serwisowanie komputerów",
};
const job3 = {
  from: "10.2019",
  to: "11.2019",
  name: "Praktykant",
  employer: `PPHU "Fenix " Kasperek Ryszard`,
  city: "Brzeźnica",
  description:
    "Najważniejsze zadania:<br> -składanie komputerów<br> -diagnostyka uszkodzeń komputerów i laptopów<br> -wymiana podzespołów<br> -instalowanie oprogramowania<br> -pomoc w wyborze odpowiednich komponentów",
};
const school1 = {
  from: "10.2022",
  to: "Obecnie",
  subject: "Informatyka",
  type: "Studia inzynierskie",
  name: "Wyższa Szkoła Informatyki i Zarządzania",
  city: "Rzeszów",
};
const school2 = {
  from: "09.2018",
  to: "04.2022",
  subject: "Technik-informatyk",
  type: "Szkoła średnia",
  name: "Technikum nr. 2",
  city: "Ropczyce",
};
const cert1 = {
  type: "Certyfikat",
  when: "Maj 2020",
  title: "NDG Linux Essentials",
  from: "Cisco",
};
const cert2 = {
  type: "Kwalifikacja",
  when: "Wrzesień 2021",
  title: "EE.08",
  from: "OKE",
  description: "Montaż i eskploatacja systemów komputerowych, urządzeń peryferyjnych i sieci",
};
const cert3 = {
  type: "Kwalifikacja",
  when: "Marzec 2022",
  title: "EE.09",
  from: "OKE",
  description: "Programowanie, tworzenie i administrowanie stronami internetowymi i bazami danych",
};

const Languages = [RUSIAN, ENGLISH, POLISH];
const allTech = [SQL, PHP, JS, CSS, HTML];
const allPrograms = [PHOTOSHOP, PREMIERPRO, LINUX, OFFICE, WINDOWS];
const allJobs = [job3, job2, job1];
const allSchools = [school2, school1];
const allCerts = [cert1, cert2, cert3];
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

homeBtn.addEventListener("click", showHomePage);
// MAIN HOMEPAGE FUNC END
// MAIN EXPERIENCE FUNC START

function showExperience() {
  content.innerHTML = "";
  content.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="expierience">
    <div class="exp-title">
      <h3>Doświadczenie zawodowe</h3>
    </div>
    <div class="exp-jobs"></div>
  </div>
  <div class="expierience">
    <div class="exp-title">
      <h3>Wykształcenie</h3>
    </div>
    <div class="edu-steps"></div>
  </div>
  <div class="expierience">
    <div class="exp-title">
      <h3>Certyfikaty</h3>
    </div>
    <div class="certificates"></div>
  </div>`
  );
  const experienceBox = document.querySelector(".exp-jobs");
  allJobs.forEach((e) => {
    const pattern = `<div class="exp-child">
    <div class="when">
      <p>Od: ${e.from} Do: ${e.to}</p>
    </div>
    <div class="work">
      <h3>${e.name}</h3>
      <p>${e.employer}, ${e.city}</p>
      <p>${e.description}</p>
    </div>
  </div>`;
    experienceBox.insertAdjacentHTML("afterbegin", pattern);
  });

  const schoolBox = document.querySelector(".edu-steps");
  allSchools.forEach((e) => {
    const pattern = `<div class="exp-child">
    <div class="when">
      <p>Od: ${e.from} Do: ${e.to}</p>
    </div>
    <div class="work">
      <h3>${e.subject}, ${e.type}</h3>
      <p>${e.name}, ${e.city}</p>
    </div>
  </div>`;
    schoolBox.insertAdjacentHTML("afterbegin", pattern);
  });
  const certificatesBox = document.querySelector(".certificates");
  allCerts.forEach((e) => {
    const pattern = `<div class="exp-child">
    <div class="cert">
    <div class="cert-child">
      <h3>${e.type} ${e.title}</h3>
      <p>${e.when} <br>Wydane przez: ${e.from}</p>
    </div>
    ${e.description == undefined ? "" : `<p>${e.description}</p>`}
    </div>
  </div>`;
    certificatesBox.insertAdjacentHTML("afterbegin", pattern);
  });
}

experienceBtn.addEventListener("click", showExperience);
// MAIN EXPERIENCE FUNC END
// MAIN PROJEKTS FUNC START
//    DATA START    //
const project1 = {
  id: 0,
  name: "Prosty kalkulator",
  src: "../projects/calculator/index.html",
  width: "355px",
  height: "525px",
};
const project2 = {
  id: 1,
  name: "Generator haseł",
  src: "../projects/passwdGen/index.html",
  width: "355px",
  height: "525px",
};
const allProjects = [project2, project1];
//    DATA END    //

function showProjects() {
  content.innerHTML = "";
  content.insertAdjacentHTML(
    "afterbegin",
    `<div class="projects">
              
  </div>`
  );
  const projectPromise = new Promise(() => {});
  function displayProjects() {
    allProjects.forEach((e) => {
      const projectsBox = document.querySelector(".projects");
      const pattern = `<div class="project-child">
      <div class="project exp-title">
        <h3>${e.name}</h3>
        <button class="openModal${e.id}">Otwórz</button>
        <dialog class="modal${e.id}">
          <div class="iframeBox">
            <iframe height="${e.height}" width="${e.width}" src="${e.src}"></iframe>
          </div>
          <button class="closeModal${e.id} btn">Zamknij</button>
        </dialog>
      </div>
    </div>`;
      projectsBox.insertAdjacentHTML("afterbegin", pattern);
    });
  }
  function projectsBtns() {
    allProjects.forEach((e) => {
      const openEl = document.querySelector(`.openModal${e.id}`);
      const closeEl = document.querySelector(`.closeModal${e.id}`);
      const el = document.querySelector(`.modal${e.id}`);
      openEl.addEventListener("click", () => {
        el.showModal();
      });
      closeEl.addEventListener("click", () => {
        el.close();
      });
    });
  }
  projectPromise.then(displayProjects()).then(projectsBtns());
}
projectsBtn.addEventListener("click", () => {
  showProjects();
});
// MAIN PROJEKTS FUNC END
function showContact() {
  content.innerHTML = "";
  const pattern = `<div class="contact">
              <div class="telegram contact--card">
                <div class="icon">
                  <img src="../content/icons/telegram.svg">
                </div>
                <div class="info">
                  <a href="https://t.me/Z0skar">Telegram</a>
                </div>
              </div>
              <div class="e-mail contact--card">
                <div class="icon">
                  <img src="../content/icons/email.svg">
                </div>
                <div class="info">
                  <a>zegaroskar@outlook.com</a>
                </div>
              </div>
              <div class="linkedin contact--card">
                <div class="icon">
                  <img src="../content/icons/linkedin.svg">
                </div>
                <div class="info">
                  <a href="https://www.linkedin.com/in/oskar-zegar-745362239/">Profil LinkedIn</a>
                </div>
              </div>
              <div class="facebook contact--card">
                <div class="icon">
                  <img src="../content/icons/facebook.svg">
                </div>
                <div class="info">
                  <a href="https://www.facebook.com/oskar.zegar.71/">Profil Facebook</a>
                </div>
              </div>
              <div class="github contact--card">
                <div class="icon">
                  <img src="../content/icons/github.svg">
                </div>
                <div class="info">
                  <a href="https://github.com/BLAAK1">Profil GitHub</a>
                </div>
              </div>
            </div>`;
  content.insertAdjacentHTML("afterbegin", pattern);
}
contactBtn.addEventListener("click", showContact);
showHomePage();
