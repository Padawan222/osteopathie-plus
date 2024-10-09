import "/src/assets/styles/style.scss";
import "./osteopathie.scss";

// anim start

// const element1 = document.querySelector(".text-anim-start-p1");

// element1.addEventListener("animationend", () => {
//   element1.style.display = "none";
// });

// setTimeout(() => {
//   const element2 = document.querySelector(".text-anim-start-p2");

//   element2.addEventListener("animationend", () => {
//     element2.style.display = "none";
//   });
// }, 1500);

// setTimeout(() => {
//   const element = document.querySelector(".text-anim-start");

//   element.addEventListener("animationend", () => {
//     element.style.display = "none";
//   });
// }, 3000);

// btn xs
const btn = document.querySelector(".btn-xs");
const bar1 = document.querySelector(".bar-1");
const bar2 = document.querySelector(".bar-2");
const bar3 = document.querySelector(".bar-3");
const nav = document.querySelector("nav");
const containerGeneral = document.querySelector(".container-general");

btn.addEventListener("click", () => {
  if (bar1.classList.contains("bar-1-active-1")) {
    bar1.classList.remove("bar-1-active-2");
    bar3.classList.remove("bar-3-active-2");
    nav.classList.remove("nav-active-1-xs");
    nav.classList.remove("nav-active-2-xs");
    setTimeout(() => {
      bar1.classList.remove("bar-1-active-1");
      bar2.classList.remove("bar-2-active");
      bar3.classList.remove("bar-3-active-1");
      nav.classList.add("nav-active-1-xs");
    }, 300);
    setTimeout(() => {
      nav.style.display = "none";
      nav.classList.add("nav-active-2-xs");
    }, 1100);
  } else {
    bar1.classList.add("bar-1-active-1");
    bar2.classList.add("bar-2-active");
    bar3.classList.add("bar-3-active-1");
    setTimeout(() => {
      bar1.classList.add("bar-1-active-2");
      bar3.classList.add("bar-3-active-2");
      nav.style.display = "flex";
    }, 300);
  }
});
// header

const headerContainer = document.querySelector(".header-container");
const header = document.querySelector("header");

// Convertir 8rem en pixels
const remToPixels = (rem) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;
  
  // Obtenir la position du bas de l'élément par rapport à la fenêtre
  const bottomElementToTopViewport = headerContainer.getBoundingClientRect().bottom;
  
  // Convertir 8rem en pixels
  const stopScrollDistance = remToPixels(8);

  // Vérifier si le bas de l'élément est à 8rem du haut de la fenêtre
  if (bottomElementToTopViewport <= stopScrollDistance) {
    header.classList.add("header-background");
    headerContainer.classList.add("header-container-background-none");
  } else {
    header.classList.remove("header-background");
    headerContainer.classList.remove("header-container-background-none");
  }
});
document.querySelector('.fleche-header-container').addEventListener('click', function(e) {
  e.preventDefault(); // Empêche le comportement par défaut du lien d'ancre

  // Sélectionner l'élément <main>
  const mainElement = document.querySelector('main');

  if (mainElement) {
    // Calculer la position de l'élément <main> par rapport à la fenêtre
    const targetPosition = mainElement.getBoundingClientRect().top + window.pageYOffset;

    // Calculer l'offset de 8 rem (en pixels)
    const offset = 4 * parseFloat(getComputedStyle(document.documentElement).fontSize); 

    // Défilement vers la position ajustée
    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth' // Pour un défilement fluide
    });
  }
});
