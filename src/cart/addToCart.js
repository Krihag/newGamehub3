import updateCart from "./updateCart.js";
import cartPages from "./displayCart/cartPages.js";

const cartItems = document.querySelector(".cart-open");

export default function addToCart(game, quantity = 1) {
  const getPrevGames = localStorage.getItem("cartItems");
  let gamesPrevAdded = JSON.parse(getPrevGames);
  if (gamesPrevAdded === null) gamesPrevAdded = "";

  let itemsInCart = [...gamesPrevAdded];

  let newItem;
  let totalItems = quantity;

  const priceNow = Number(game.prices.sale_price / 100);

  if (gamesPrevAdded) {
    totalItems = gamesPrevAdded.reduce((acc, cur) => {
      return acc + Number(cur.quantity);
    }, quantity);

    const foundGame = gamesPrevAdded.find((curGame) => {
      if (curGame.id === game.id) {
        return game.id;
      }
    });

    if (foundGame) {
      foundGame.quantity += quantity;

      updateCart(foundGame);
    } else {
      newItem = {
        id: game.id,
        quantity: quantity,
        name: game.name,
        price: priceNow,
        img: game.images[0].src,
        alt: game.description,
      };
      itemsInCart = [...gamesPrevAdded, newItem];
    }
  } else {
    cartItems.classList.add("cart-number-items");
    newItem = {
      id: game.id,
      quantity: quantity,
      name: game.name,
      price: priceNow,
      img: game.images[0].src,
      alt: game.description,
    };
    itemsInCart = [...gamesPrevAdded, newItem];
  }

  cartItems.style.setProperty("--cart-content", "'" + totalItems + "'");

  localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
}
