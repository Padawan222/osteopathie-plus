import "/src/assets/styles/style.scss";
import "./index.scss";

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


const remToPixels = (rem) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;
  

  const bottomElementToTopViewport = headerContainer.getBoundingClientRect().bottom;
  

  const stopScrollDistance = remToPixels(8);


  if (bottomElementToTopViewport <= stopScrollDistance) {
    header.classList.add("header-background");
    headerContainer.classList.add("header-container-background-none");
  } else {
    header.classList.remove("header-background");
    headerContainer.classList.remove("header-container-background-none");
  }
});
// header fleche 
document.querySelector('.fleche-header-container').addEventListener('click', function(e) {
  e.preventDefault(); 


  const mainElement = document.querySelector('main');

  if (mainElement) {

    const targetPosition = mainElement.getBoundingClientRect().top + window.pageYOffset;


    const offset = 4 * parseFloat(getComputedStyle(document.documentElement).fontSize); 


    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth' 
    });
  }
});

// hc text
const textHc = document.querySelector(".container-hc-text");

// Fonction pour convertir rem en pixels
const remToPixels2 = (rem) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

// Écouteur d'événement pour le défilement
window.addEventListener("scroll", () => {
  const { scrollTop } = document.documentElement;
  const topElementToTopViewport = textHc.getBoundingClientRect().top + scrollTop; // Position de textHc par rapport au document

  // Vérifie si textHc a atteint 8 rem du haut de la page
  if (topElementToTopViewport <= scrollTop + remToPixels2(20)) {
    textHc.classList.add("container-hc-text-anim");
    textHc.classList.remove("container-hc-text-anim-2");
  } else {
    textHc.classList.add("container-hc-text-anim-2");
    textHc.classList.remove("container-hc-text-anim");
  }
});
