import fetchGames from "../games/fetchGames.js";
import cartItem from "../cart/cartItem.js";

const cartImage = document.querySelector(".cart-item-img");
const cartContainer = document.querySelector(".cart-items-container");
const totalPriceContainer = document.querySelector("h1 span");

// const games = await fetchGames();

const getPrevGames = localStorage.getItem("cartItems");
let gamesPrevAdded = JSON.parse(getPrevGames);

gamesPrevAdded.forEach((game) => {
  console.log(game);
  cartItem(game, cartContainer);
});
const totalSum = gamesPrevAdded.reduce((acc, cur) => {
  const itemSum = cur.price * cur.quantity;
  return acc + itemSum;
}, 0);
totalPriceContainer.textContent = "$" + totalSum.toFixed(2);
