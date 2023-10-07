import fetchGames from "../games/fetchGames.js";
import addToCart from "../cart/addToCart.js";

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

const priceContainer = document.createElement("div");
priceContainer.classList.add("price-container");
const price = document.createElement("p");
price.classList.add("game-price");
price.textContent = "$" + game.discountedPrice;
if (game.onSale) {
  const oldPrice = document.createElement("p");
  oldPrice.classList.add("game-old-price");
  oldPrice.textContent = "$" + game.price;
  priceContainer.appendChild(oldPrice);
}
priceContainer.appendChild(price);

const quantityContainer = document.createElement("div");
quantityContainer.classList.add("quantity-container");
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
totalPrice.textContent = "$" + game.discountedPrice;

const addToCartBtn = document.createElement("button");
addToCartBtn.classList.add("button");
addToCartBtn.classList.add("pink-btn");
addToCartBtn.classList.add("add-to-cart");
addToCartBtn.textContent = "Add to cart";

totalPriceContainer.append(totalPrice);

gameContainer.append(container);
container.append(imageAndDetails);
imageAndDetails.append(gameImg, headerDetails);

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
  const updatedTotal = game.discountedPrice * itemQty.textContent;
  totalPrice.textContent = "$" + updatedTotal.toFixed(2);
});

decreaseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (itemQty.textContent > 1) {
    itemQty.textContent--;

    const updatedTotal = game.discountedPrice * itemQty.textContent;
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
