const totalPriceContainer = document.querySelector("h1 span");

export default function updateCart(item) {
  const getPrevGames = localStorage.getItem("cartItems");
  let gamesPrevAdded = JSON.parse(getPrevGames);
  const index = gamesPrevAdded.findIndex((game) => game.id === item.id);

  if (index !== -1) {
    if (item.quantity <= 0) {
      gamesPrevAdded.splice(index, 1);
    } else {
      gamesPrevAdded[index].quantity = item.quantity;
    }
    localStorage.setItem("cartItems", JSON.stringify(gamesPrevAdded));
    // const totalSum = gamesPrevAdded.reduce((acc, cur) => {
    //   const itemSum = cur.price * cur.quantity;
    //   return acc + itemSum;
    // }, 0);
    // totalPriceContainer.textContent = "$" + totalSum.toFixed(2);
  }

  location.reload();
}
