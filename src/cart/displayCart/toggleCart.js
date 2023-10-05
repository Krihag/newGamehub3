const fullCartContainer = document.querySelector(".cart-container");
const cartIcon = document.querySelector(".cart-open");
const cartClose = document.querySelector(".cart-close");

export default function toggleCart() {
  fullCartContainer.classList.toggle("cart-visibility");
  cartIcon.classList.toggle("display-icon");
  cartClose.classList.toggle("display-icon");
}
