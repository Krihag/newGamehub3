const parallaxEl = document.querySelectorAll(".parallax");
const main = document.querySelector(".parallax-container");
const flyingMario = document.querySelector(".flying-mario");

let x = 0;
let y = 0;

window.addEventListener("scroll", () => {
  let newValue = window.scrollY * 0.1;
  console.log(flyingMario);
  flyingMario.style.left = newValue - 20 + "%";
});

window.addEventListener("mousemove", function (e) {
  x = e.clientX - window.innerWidth / 2;
  y = e.clientY - window.innerHeight / 2;

  parallaxEl.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;

    let isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

    let z = (x - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

    el.style.transform = ` perspective(2300px) translateZ(${
      z * speedz
    }px) translateY(calc(-50% + ${y * speedy}px)) translateX(calc(-50% + ${
      x * speedx
    }px))`;
  });
});

main.style.maxHeight = `${window.innerWidth * 0.6}px`;
// if (window.innerWidth >= 725) {
//   main.style.maxHeight = `${window.innerWidth * 0.6}px`;
// } else {
//   main.style.maxHeight = `${window.innerWidth * 1.4}px`;
// }

// TRENDING GAMES

const leftBtns = document.querySelectorAll(".btn-left");
const rightBtns = document.querySelectorAll(".btn-right");
const slidesContainer = document.querySelector(".article-slider-container");

leftBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    slidesContainer.style.transform += `translateX(33.334%)`;
  })
);

rightBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    slidesContainer.style.transform += `translateX(-33.334%)`;
    console.log(e.target.parentElement.parentElement);
  })
);
