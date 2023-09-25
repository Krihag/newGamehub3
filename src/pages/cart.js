import fetchGames from "../games/fetchGames.js";
import cartItem from "../cart/cartItem.js";

const cartImage = document.querySelector(".cart-item-img");
const cartContainer = document.querySelector(".cart-items-container");

const games = await fetchGames();

const getPrevGames = localStorage.getItem("cartItems");
let gamesPrevAdded = JSON.parse(getPrevGames);

gamesPrevAdded.forEach((game) => {
  console.log(game);
  cartItem(game, cartContainer);
});
