const totalPriceContainer = document.querySelector(".cart-total span");

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
    const totalSum = gamesPrevAdded.reduce((acc, cur) => {
      if (cur.price) {
        const itemSum = cur.price * cur.quantity;
        return acc + itemSum;
      }
      // else const itemsum = cur.prices.sale_price * cur.quantity;
    }, 0);

    localStorage.setItem("totalCart", totalSum);
    totalPriceContainer.textContent = "$" + totalSum.toFixed(2);
  }
}
