const itemsContainer = document.querySelector(".cart-items-container");

const getPrevGames = localStorage.getItem("cartItems");
const cartGames = JSON.parse(getPrevGames);

cartGames.forEach((game) => {
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");

  const itemImage = document.createElement("img");
  itemImage.classList.add("item-img");
  itemImage.src = game.img;
  itemImage.alt = game.alt;

  const itemContent = document.createElement("div");
  itemContent.classList.add("item-content");

  const itemName = document.createElement("p");
  itemName.classList.add("item-name");
  itemName.textContent = game.name;

  const quantityAndPrice = document.createElement("div");
  quantityAndPrice.classList.add("quantity-and-price");

  const quantity = document.createElement("p");
  quantity.textContent = "quantity: ";

  const quantityValue = document.createElement("span");
  quantityValue.textContent = game.quantity;

  const price = document.createElement("p");
  price.textContent = "$" + game.price;

  quantity.appendChild(quantityValue);
  quantityAndPrice.appendChild(quantity);
  quantityAndPrice.appendChild(price);
  itemContent.appendChild(itemName);
  itemContent.appendChild(quantityAndPrice);
  cartItem.appendChild(itemImage);
  cartItem.appendChild(itemContent);

  itemsContainer.append(cartItem);
});
