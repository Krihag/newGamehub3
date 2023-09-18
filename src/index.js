import fetchGames from "./games/fetchGames.js";
import smallGame from "./games/smallGame.js";

const parallaxEl = document.querySelectorAll(".parallax");
const main = document.querySelector(".parallax-container");
const bestSellers = document.querySelector(".bestseller-container");
const articleSlides = document.querySelectorAll(".article-slide");
const flyingMario = document.querySelector(".flying-mario");

let x = 0;
let y = 0;

const games = await fetchGames();

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

let i = 0;

leftBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    i--;
    slidesContainer.style.transform = `translateX(${-33.334 * i}%)`;
  })
);

rightBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    i++;
    slidesContainer.style.transform = `translateX(${-33.334 * i}%)`;

    console.log(e.target.parentElement.parentElement);
  })
);

const featuredGames = [games[3], games[4], games[6]];

articleSlides.forEach((slide, i) => {
  slide.querySelector("h3").textContent = featuredGames[i].title;
  slide.querySelector(".article-description").textContent =
    featuredGames[i].description;
  slide.querySelector(".article-genre").textContent = featuredGames[i].genre;
  slide.querySelector(".article-release").textContent =
    featuredGames[i].released;
  slide.querySelector(
    ".article-price"
  ).textContent = `$${featuredGames[i].discountedPrice}`;
});

// bestsellers

for (let i = 0; i < 4; i++) {
  smallGame(games[i], bestSellers, true);
}
// window.addEventListener("scroll", () => {
//   let newValue = window.scrollY * 0.1;

//   flyingMario.style.left = newValue - 20 + "%";
// });
