import updateCart from "./updateCart.js";

const cartOpen = document.querySelector(".cart-open");
const cartClose = document.querySelector(".cart-close");
const fullCartContainer = document.querySelector(".cart-container");

export default function cartItem(item) {
  const cartItemDiv = document.createElement("div");
  cartItemDiv.classList.add("cart-item");
  cartItemDiv.dataset.id = item.id;

  const innerDiv = document.createElement("div");

  const img = document.createElement("img");
  img.classList.add("cart-item-img");

  img.src = item.img;
  img.alt = item.alt;

  innerDiv.appendChild(img);

  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("cart-item-details");

  const itemName = document.createElement("p");
  itemName.classList.add("cart-item-name");
  itemName.textContent = item.name.split(" ").slice(0, 2).join(" ");

  const price = document.createElement("p");
  price.textContent = "$" + item.price;

  const quantityContainer = document.createElement("div");
  quantityContainer.classList.add("quantity-container");

  const decreaseBtn = document.createElement("button");
  decreaseBtn.textContent = "-";
  const itemQty = document.createElement("p");
  itemQty.classList.add("item-qty");
  itemQty.textContent = item.quantity;
  const increaseBtn = document.createElement("button");
  increaseBtn.textContent = "+";
  quantityContainer.append(decreaseBtn, itemQty, increaseBtn);
  let itemTotal = (item.quantity * item.price).toFixed(2);
  const totalPrice = document.createElement("p");
  totalPrice.textContent = `$${itemTotal}`;

  detailsContainer.append(itemName, price, quantityContainer, totalPrice);
  cartItemDiv.append(innerDiv, detailsContainer);

  decreaseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    item.quantity--;
    updateCart(item);
    if (item.quantity <= 0) {
      cartItemDiv.remove();
      cartClose.classList.add("display-icon");
      cartOpen.classList.remove("display-icon");
      fullCartContainer.classList.add("cart-visibility");
    } else {
      itemQty.textContent = item.quantity;
      itemTotal = (item.quantity * item.price).toFixed(2);
      totalPrice.textContent = `$${itemTotal}`;
    }
  });

  increaseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    item.quantity++;
    updateCart(item);
    itemQty.textContent = item.quantity;
    itemTotal = (item.quantity * item.price).toFixed(2);
    totalPrice.textContent = `$${itemTotal}`;
  });

  return cartItemDiv;
}
