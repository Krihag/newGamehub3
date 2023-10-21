import cartItem from "../cartItem.js";
import updateCart from "../updateCart.js";
import cartPageBtns from "./cartPageBtns.js";
import cartPages from "./cartPages.js";
import toggleCart from "./toggleCart.js";

export default function displayCart() {
  const cartItemsContainer = document.querySelector(".cart-items-container");
  const totalPriceContainer = document.querySelector(".cart-total span");
  const cartIcon = document.querySelector(".cart-open");
  const cartClose = document.querySelector(".cart-close");
  const shopMoreBtn = document.querySelector(".shop-more");
  const checkoutBtn = document.querySelector(".cart-btns a");

  const getPrevGames = localStorage.getItem("cartItems");
  let gamesPrevAdded = JSON.parse(getPrevGames);

  if (gamesPrevAdded) {
    const cartItemsList = gamesPrevAdded.map((game) => cartItem(game));

    cartPages(cartItemsList, cartItemsContainer);

    const totalSum = gamesPrevAdded.reduce((acc, cur) => {
      const itemSum = cur.price * cur.quantity;
      return acc + itemSum;
    }, 0);
    totalPriceContainer.textContent = "$" + totalSum.toFixed(2);

    localStorage.setItem("totalCart", totalSum);
  }
  cartIcon.addEventListener("click", function (e) {
    e.preventDefault();
    const getPrevGames = localStorage.getItem("cartItems");
    let gamesPrevAdded = JSON.parse(getPrevGames);
    gamesPrevAdded.forEach((game) => updateCart(game));
    if (gamesPrevAdded && gamesPrevAdded.length >= 1) {
      toggleCart();
      const cartItemsList = gamesPrevAdded.map((game) => cartItem(game));
      cartPages(cartItemsList, cartItemsContainer);
    } else {
      cartIcon.classList.add("cart-empty");
      setTimeout(() => {
        cartIcon.classList.remove("cart-empty");
      }, 4000);
    }
  });
  cartClose.addEventListener("click", function (e) {
    e.preventDefault();
    toggleCart();
  });
  shopMoreBtn.addEventListener("click", toggleCart);
}
