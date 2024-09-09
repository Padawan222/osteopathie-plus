import "/src/assets/styles/style.scss";
import "./index.scss";

// anim start

const element1 = document.querySelector(".text-anim-start-p1");

element1.addEventListener("animationend", () => {
  element1.style.display = "none";
});

setTimeout(() => {
  const element2 = document.querySelector(".text-anim-start-p2");

  element2.addEventListener("animationend", () => {
    element2.style.display = "none";
  });
}, 1500);

setTimeout(() => {
  const element = document.querySelector(".text-anim-start");

  element.addEventListener("animationend", () => {
    element.style.display = "none";
  });
}, 3000);

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
