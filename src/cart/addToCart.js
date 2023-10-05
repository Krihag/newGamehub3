import updateCart from "./updateCart.js";
import cartPages from "./displayCart/cartPages.js";

export default function addToCart(game, quantity = 1) {
  const getPrevGames = localStorage.getItem("cartItems");
  let gamesPrevAdded = JSON.parse(getPrevGames);
  if (gamesPrevAdded === null) gamesPrevAdded = "";

  let itemsInCart = [...gamesPrevAdded];

  let newItem;

  if (gamesPrevAdded) {
    const foundGame = gamesPrevAdded.find((curGame) => {
      if (curGame.id === game.id) {
        return game.id;
      }
    });

    if (foundGame) {
      console.log(quantity);
      foundGame.quantity += quantity;
      updateCart(foundGame);
    } else {
      newItem = {
        id: game.id,
        quantity: quantity,
        name: game.title,
        price: game.discountedPrice,
        img: game.image,
        alt: game.description,
      };
      itemsInCart = [...gamesPrevAdded, newItem];
    }
  } else {
    newItem = {
      id: game.id,
      quantity: quantity,
      name: game.title,
      price: game.discountedPrice,
      img: game.image,
      alt: game.description,
    };
    itemsInCart = [...gamesPrevAdded, newItem];
  }
  localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
}
