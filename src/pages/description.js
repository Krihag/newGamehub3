import fetchGames from "../games/fetchGames.js";

const gameContainer = document.querySelector(".game-description-section");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const game = await fetchGames(id);

// display game
const container = document.createElement("article");
container.classList.add("description-top-half");

const imageAndDetails = document.createElement("div");
imageAndDetails.classList.add("image-and-details");
const gameImg = document.createElement("img");
gameImg.classList.add("game-img");
gameImg.src = game.image;

const headerDetails = document.createElement("div");
headerDetails.classList.add("header-details");

const headerText = document.createElement("h1");
headerText.classList.add("header-text");
headerText.textContent = game.title;

const gameDescription = document.createElement("p");
gameDescription.classList.add("header-description");
gameDescription.textContent = game.description;

const genreAndPrice = document.createElement("div");
genreAndPrice.classList.add("genre-and-price");

const genreHeader = document.createElement("p");
genreHeader.classList.add("genre-header");
genreHeader.classList.add("semi-bold");
genreHeader.textContent = "Genre: ";
const genreSpan = document.createElement("span");
genreSpan.textContent = game.genre;

const priceHeader = document.createElement("p");
priceHeader.classList.add("price-header");
priceHeader.classList.add("semi-bold");
priceHeader.textContent = "Price: ";

const priceSpan = document.createElement("span");
priceSpan.textContent = `$${game.price}`;

const quantityAndDevice = document.createElement("div");
quantityAndDevice.classList.add("quantity-and-device");

const quantityContainer = document.createElement("div");
quantityContainer.classList.add("quantity-container");
const quantityText = document.createElement("p");
quantityText.classList.add("semi-bold");
quantityText.textContent = "Quantity: ";
const quantityInput = document.createElement("input");

const deviceContainer = document.createElement("div");
deviceContainer.classList.add("device-container");
const deviceText = document.createElement("p");
deviceText.classList.add("semi-bold");
deviceText.textContent = "Devices: ";
const deviceInput1 = document.createElement("button");
deviceInput1.textContent = "Playstation";
const deviceInput2 = document.createElement("button");
deviceInput2.textContent = "X-box";

const buyBtn = document.createElement("button");
buyBtn.classList.add("buy-now-btn");
buyBtn.classList.add("add-to-cart");
buyBtn.textContent = "Buy now";

gameContainer.append(container);
container.append(imageAndDetails);
imageAndDetails.append(gameImg, headerDetails);

headerDetails.append(
  headerText,
  gameDescription,
  genreAndPrice,
  quantityAndDevice,
  buyBtn
);

genreAndPrice.append(genreHeader, priceHeader);
genreHeader.append(genreSpan);
priceHeader.append(priceSpan);
quantityAndDevice.append(quantityContainer, deviceContainer);
quantityContainer.append(quantityText, quantityInput);

deviceContainer.append(deviceText, deviceInput1, deviceInput2);
