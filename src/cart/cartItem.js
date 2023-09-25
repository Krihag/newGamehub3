export default function cartItem(item, container) {
  const cartItemDiv = document.createElement("div");
  cartItemDiv.classList.add("cart-item");
  cartItemDiv.dataset.id = item.id;

  const innerDiv = document.createElement("div");

  const img = document.createElement("img");
  img.classList.add("cart-item-img");
  console.log(item);
  img.src = item.img;
  img.alt = item.alt;

  const itemName = document.createElement("p");
  itemName.classList.add("cart-item-name");
  itemName.textContent = item.title;

  innerDiv.appendChild(img);
  innerDiv.appendChild(itemName);

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

  cartItemDiv.append(innerDiv, price, quantityContainer, totalPrice);

  decreaseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    item.quantity--;
  });

  increaseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    item.quantity++;
  });

  console.log(cartItemDiv);
  container.append(cartItemDiv);
}
