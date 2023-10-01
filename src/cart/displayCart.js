import cartItem from "./cartItem.js";
import updateCart from "./updateCart.js";

export default function displayCart() {
  const fullCartContainer = document.querySelector(".cart-container");
  const cartItemsContainer = document.querySelector(".cart-items-container");
  const totalPriceContainer = document.querySelector(".cart-total span");
  const cartIcon = document.querySelector(".shopping-cart-icon");

  const getPrevGames = localStorage.getItem("cartItems");
  let gamesPrevAdded = JSON.parse(getPrevGames);

  gamesPrevAdded.forEach((game) => {
    cartItem(game, cartItemsContainer);
  });
  const totalSum = gamesPrevAdded.reduce((acc, cur) => {
    const itemSum = cur.price * cur.quantity;
    return acc + itemSum;
  }, 0);
  totalPriceContainer.textContent = "$" + totalSum.toFixed(2);

  localStorage.setItem("totalCart", totalSum);

  cartIcon.addEventListener("click", function (e) {
    e.preventDefault();
    fullCartContainer.classList.toggle("cart-visibility");
    gamesPrevAdded.forEach((game) => updateCart(game));
  });

  // document.addEventListener("click", function (e) {
  //   if (fullCartContainer.contains(e.target) || cartIcon.contains(e.target))
  //     return;
  //   else fullCartContainer.classList.add("cart-visibility");
  // });
}
