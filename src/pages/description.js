import fetchGames from "../games/fetchGames.js";
import addToCart from "../cart/addToCart.js";
import smallGame from "../games/smallGame.js";

const gameContainer = document.querySelector(".game-description-section");
const loader = document.querySelector(".loader-container");
const suggestedContainer = document.querySelector(".suggested-games");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const game = await fetchGames(`/${id}`);

// display game
const container = document.createElement("article");
container.classList.add("description-top-half");
`/${id}`;
const imageAndDetails = document.createElement("div");
imageAndDetails.classList.add("image-and-details");

const imgContainer = document.createElement("div");
imgContainer.classList.add("img-container");
const gameImg = document.createElement("img");
gameImg.classList.add("game-img");
gameImg.src = game.images[0].src;

const headerDetails = document.createElement("div");
headerDetails.classList.add("header-details");

const headerText = document.createElement("h1");
headerText.classList.add("header-text");
headerText.textContent = game.name;

const gameDescription = document.createElement("p");
gameDescription.classList.add("header-description");
gameDescription.textContent = game.attributes[4].terms[0].name;

const priceNow = Number(game.prices.sale_price / 100);
const regPrice = Number(game.prices.regular_price / 100);

const priceContainer = document.createElement("div");
priceContainer.classList.add("price-container");
const price = document.createElement("p");
price.classList.add("game-price");
price.textContent = "$" + priceNow;
if (game.onSale) {
  const oldPrice = document.createElement("p");
  oldPrice.classList.add("game-old-price");
  oldPrice.textContent = "$" + regPrice;
  priceContainer.appendChild(oldPrice);
  imgContainer.classList.add("game-on-sale");
}
priceContainer.appendChild(price);

const quantityContainer = document.createElement("div");
quantityContainer.classList.add("descript-quantity-container");
const quantityText = document.createElement("p");
quantityText.classList.add("semi-bold");
quantityText.textContent = "Qty: ";

const changeQuantity = document.createElement("div");
changeQuantity.classList.add("change-quantity-container");

const decreaseBtn = document.createElement("button");
decreaseBtn.textContent = "-";
const itemQty = document.createElement("p");
itemQty.classList.add("item-qty");
itemQty.textContent = 1;
const increaseBtn = document.createElement("button");
increaseBtn.textContent = "+";

const totalPriceContainer = document.createElement("p");
totalPriceContainer.classList.add("total-price-container");
totalPriceContainer.classList.add("semi-bold");
totalPriceContainer.textContent = "Total: ";

const totalPrice = document.createElement("span");
totalPrice.textContent = "$" + priceNow;

const addToCartBtn = document.createElement("button");
addToCartBtn.classList.add("button");
addToCartBtn.classList.add("pink-btn");
addToCartBtn.classList.add("add-to-cart");
addToCartBtn.textContent = "Add to cart";

totalPriceContainer.append(totalPrice);

gameContainer.prepend(container);
container.append(imageAndDetails);
imgContainer.appendChild(gameImg);
imageAndDetails.append(imgContainer, headerDetails);

headerDetails.append(
  headerText,
  priceContainer,
  gameDescription,

  quantityContainer,
  totalPriceContainer,
  addToCartBtn
);

changeQuantity.append(decreaseBtn, itemQty, increaseBtn);
quantityContainer.append(quantityText, changeQuantity);

increaseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  itemQty.textContent++;
  const updatedTotal = priceNow * itemQty.textContent;
  totalPrice.textContent = "$" + updatedTotal.toFixed(2);
});

decreaseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (itemQty.textContent > 1) {
    itemQty.textContent--;

    const updatedTotal = priceNow * itemQty.textContent;
    totalPrice.textContent = "$" + updatedTotal.toFixed(2);
    console.log("test");
  }
});
// GAME IMG
// window.addEventListener("scroll", () => {

// })
addToCartBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addToCart(game, Number(itemQty.textContent));
});

// Game description -Specifications

document.querySelector(".spec-genre span").textContent =
  game.attributes[0].terms[0].name;
document.querySelector(".spec-publisher span").textContent =
  game.attributes[3].terms[0].name;
document.querySelector(".spec-age span").textContent =
  game.attributes[2].terms[0].name;
document.querySelector(".spec-release span").textContent =
  game.attributes[1].terms[0].name;

// Suggested games

const suggestedGames = [];

function randomGame(games, container, game) {
  const curGame = games[Math.floor(Math.random() * games.length)];
  if (
    curGame.name === game.name ||
    container.find((item) => item.name === curGame.name)
  ) {
    randomGame(games, container, game);
  } else {
    container.push(curGame);
  }
}
const allGames = await fetchGames();
for (let i = 0; i < 4; i++) {
  randomGame(allGames, suggestedGames, game);
}

suggestedGames.forEach((game) => smallGame(game, suggestedContainer));

console.log(suggestedGames);

loader.remove();
