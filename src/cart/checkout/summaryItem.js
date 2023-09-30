export default function summaryItem(game, container) {
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.classList.add("border-bottom");

  const itemImage = document.createElement("img");
  itemImage.classList.add("item-img");
  itemImage.src = game.img;
  itemImage.alt = game.alt;

  const itemContent = document.createElement("div");
  itemContent.classList.add("item-content");

  const itemName = document.createElement("p");
  itemName.classList.add("item-name");
  itemName.textContent = game.name;

  const priceEach = document.createElement("p");
  priceEach.textContent = "$" + game.price;

  const quantityAndPrice = document.createElement("div");
  quantityAndPrice.classList.add("quantity-and-price");

  const quantity = document.createElement("p");
  quantity.textContent = "quantity: ";

  const quantityValue = document.createElement("span");
  quantityValue.textContent = game.quantity;

  const price = document.createElement("p");
  price.textContent = "$" + (game.price * game.quantity).toFixed(2);

  quantity.appendChild(quantityValue);
  quantityAndPrice.appendChild(quantity);
  quantityAndPrice.appendChild(price);
  itemContent.appendChild(itemName);
  itemContent.appendChild(priceEach);
  itemContent.appendChild(quantityAndPrice);
  cartItem.appendChild(itemImage);
  cartItem.appendChild(itemContent);

  container.append(cartItem);
}
