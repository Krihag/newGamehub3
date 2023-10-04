import cartItem from "../cartItem.js";
import updateCart from "../updateCart.js";
import cartPageBtns from "./cartPageBtns.js";
import cartPages from "./cartPages.js";

export default function displayCart() {
  const fullCartContainer = document.querySelector(".cart-container");
  const cartItemsContainer = document.querySelector(".cart-items-container");
  const totalPriceContainer = document.querySelector(".cart-total span");
  const cartIcon = document.querySelector(".cart-open");
  const cartClose = document.querySelector(".cart-close");
  const shopMoreBtn = document.querySelector(".shop-more");

  const getPrevGames = localStorage.getItem("cartItems");
  let gamesPrevAdded = JSON.parse(getPrevGames);

  const cartItemsList = gamesPrevAdded.map((game) => cartItem(game));

  cartPages(cartItemsList, cartItemsContainer);

  const totalSum = gamesPrevAdded.reduce((acc, cur) => {
    const itemSum = cur.price * cur.quantity;
    return acc + itemSum;
  }, 0);
  totalPriceContainer.textContent = "$" + totalSum.toFixed(2);

  localStorage.setItem("totalCart", totalSum);

  function toggleCart() {
    fullCartContainer.classList.toggle("cart-visibility");
    cartIcon.classList.toggle("display-icon");
    cartClose.classList.toggle("display-icon");
  }
  cartIcon.addEventListener("click", function () {
    toggleCart();
    const getPrevGames = localStorage.getItem("cartItems");
    let gamesPrevAdded = JSON.parse(getPrevGames);
    const cartItemsList = gamesPrevAdded.map((game) => cartItem(game));
    cartPages(cartItemsList, cartItemsContainer);
  });
  cartClose.addEventListener("click", toggleCart);
  shopMoreBtn.addEventListener("click", toggleCart);
}
