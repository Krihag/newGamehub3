import fetchGames from "../games/fetchGames.js";
import smallGame from "../games/smallGame.js";
import characters from "../games/cyberpunk/characters.js";
import updateCharacters from "../games/cyberpunk/updateChar.js";
import addToCart from "../cart/addToCart.js";

const sliderContainer = document.querySelector(".all-slides-container");
const gamesContainer = document.querySelector(".games-container");
const gameCategory = document.querySelector("#game-category");
const categoryHeader = document.querySelector(".category-header");
const loader = document.querySelector(".loader-container");

const games = await fetchGames();

const boxer = games.find((game) => game.title == "Boxer");
let spaceWar = games.find((game) => game.title == "Space War");
let assassin = games.find((game) => game.title == "Assassin");

const sliderGames = [boxer, spaceWar, assassin];

const allSlides = sliderGames.map((game, i) => {
  const slideMainContainer = document.createElement("article");
  slideMainContainer.classList.add("slides");

  const url = `url(../../img/slider-${i + 1}.jpg)`;
  slideMainContainer.style.backgroundImage = url;

  const slideSubContainer = document.createElement("div");
  slideSubContainer.classList.add("slide-container");
  slideMainContainer.appendChild(slideSubContainer);

  const gameImg = document.createElement("img");
  gameImg.src = game.image;
  gameImg.classList.add("slide-image");

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("slide-content");
  slideSubContainer.append(gameImg, contentContainer);

  const header = document.createElement("h2");
  header.classList.add("slide-title");
  header.textContent = game.title;

  const priceContainer = document.createElement("div");
  priceContainer.classList.add("slide-price-container");

  const newPrice = document.createElement("p");
  newPrice.textContent = "$" + game.discountedPrice;
  newPrice.classList.add("slide-new-price");

  if (game.onSale) {
    const oldPrice = document.createElement("p");
    oldPrice.textContent = "$" + game.price;
    priceContainer.appendChild(oldPrice);
    oldPrice.classList.add("slide-old-price");
  }
  priceContainer.appendChild(newPrice);

  const descript = document.createElement("p");
  descript.classList.add("slide-description");
  descript.textContent =
    game.description +
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const buttons = document.createElement("div");
  buttons.classList.add("slider-btns");
  contentContainer.append(header, priceContainer, descript, buttons);

  const button1 = document.createElement("a");
  button1.classList.add("button");
  button1.classList.add("article-buy");
  button1.textContent = "Add to cart";

  button1.addEventListener("click", (e) => {
    e.preventDefault();
    addToCart(game);
  });

  const button2 = document.createElement("a");
  button2.classList.add("button");
  button2.classList.add("article-read-more");
  button2.textContent = "Read more";
  button2.href = `description.html?id=${game.id}`;

  buttons.append(button1, button2);

  sliderContainer.append(slideMainContainer);

  return slideMainContainer;
});

let currentIndex = 0;

function showSlide(index) {
  allSlides.forEach((slide, i) => {
    if (i === index) {
      slide.style.opacity = "1";
      slide.style.zIndex = 99;
    } else {
      slide.style.opacity = "0";
      slide.style.zIndex = 0;
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % allSlides.length;
  showSlide(currentIndex);
}

function startSlider() {
  showSlide(currentIndex);
  setInterval(nextSlide, 10000);
}

startSlider();

games.forEach((game) => smallGame(game, gamesContainer));

gameCategory.addEventListener("change", function (e) {
  const category = e.target.value;
  gamesContainer.innerHTML = "";
  games.forEach((game) => {
    if (category === "all") smallGame(game, gamesContainer);
    else if (game.genre.toLowerCase() === category)
      smallGame(game, gamesContainer);
  });
  categoryHeader.textContent = `${category} games`;
});

// CYBERPUNK GAME CHARACTERS
const cyberpunkGame = games.find((game) => game.title === "Cyberpunk");

const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");

const buyBtn = document.querySelector(".cyber-buy-btn");
const readMore = document.querySelector(".cyber-read");
const charDesc = document.querySelector(".cyber-description");
const charName = document.querySelector(".cyber-name");

readMore.href = `description.html?id=${cyberpunkGame.id}`;
buyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addToCart(cyberpunkGame);
});

updateCharacters(characters[0]);
let newNum = 0;

leftArrow.addEventListener("click", (e) => {
  const oldNum =
    e.target.parentElement.parentElement.querySelector(".active").dataset.char -
    1;

  const allChars = document.querySelectorAll(".cyber-char");

  const oldChar = characters[oldNum];

  let newNum;

  if (oldNum == 0) {
    newNum = 2;
  } else {
    newNum = oldNum - 1;
  }

  const oldItem = allChars[oldNum];
  const newItem = allChars[newNum];

  const newChar = characters[newNum];
  newChar.active = true;

  oldItem.classList.toggle("active");
  newItem.classList.toggle("active");
  updateCharacters(oldChar);
  updateCharacters(newChar);
});

rightArrow.addEventListener("click", (e) => {
  const oldNum =
    e.target.parentElement.parentElement.querySelector(".active").dataset.char -
    1;

  const allChars = document.querySelectorAll(".cyber-char");

  const oldChar = characters[oldNum];
  oldChar.active = false;
  let newNum;

  if (oldNum == 2) {
    newNum = 0;
  } else {
    newNum = oldNum + 1;
  }

  const oldItem = allChars[oldNum];
  const newItem = allChars[newNum];

  const newChar = characters[newNum];
  newChar.active = true;

  oldItem.classList.toggle("active");
  newItem.classList.toggle("active");
  updateCharacters(oldChar);
  updateCharacters(newChar);
});
loader.remove();
