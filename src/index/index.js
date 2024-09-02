import "/src/assets/styles/style.scss";
import "./index.scss";

const element1 = document.querySelector(".text-anim-start-p1");

element1.addEventListener("animationend", () => {
  element1.style.display = "none";
});

setTimeout(() => {
  const element2 = document.querySelector(".text-anim-start-p2");

  element2.addEventListener("animationend", () => {
    element2.style.display = "none";
  });
}, 1600);

setTimeout(() => {
  const element = document.querySelector(".text-anim-start");

  element.addEventListener("animationend", () => {
    element.style.display = "none";
  });
}, 3000);
