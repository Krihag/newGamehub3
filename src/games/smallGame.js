export default function smallGame(game, container, homePage = false) {
  const gameContainer = document.createElement("a");
  gameContainer.classList.add("game-cover");
  if (homePage) gameContainer.href = `HTML/description.html?id=${game.id}`;
  else gameContainer.href = `description.html?id=${game.id}`;

  const gameImg = document.createElement("img");
  gameImg.src = game.images[0].src;
  gameImg.alt = game.attributes[4].terms[0].name;

  const gameContent = document.createElement("div");
  gameContent.classList.add("game-content");

  gameContainer.append(gameImg, gameContent);

  const nameAndGenre = document.createElement("div");
  nameAndGenre.classList.add("name-and-genre");

  const newName = game.name.split(" ").slice(0, 2).join(" ");

  const name = document.createElement("h4");
  name.classList.add("game-name");
  name.textContent = newName;

  const genre = document.createElement("p");
  genre.classList.add("game-genre");
  genre.textContent = game.attributes[0].terms[0].name;

  nameAndGenre.append(name, genre);

  const priceContainer = document.createElement("div");

  const priceNow = Number(game.prices.sale_price / 100);
  const oldPrice = Number(game.prices.regular_price / 100);

  priceContainer.classList.add("price");
  if (game.on_sale) {
    gameContainer.classList.add("on-sale");
    const originalPrice = document.createElement("p");
    originalPrice.classList.add("old-price");

    // const price = Number(game.prices)

    originalPrice.textContent = `$${oldPrice}`;
    priceContainer.append(originalPrice);

    const percentage = 1 - priceNow / oldPrice;
    const discount = `-${(percentage * 100).toFixed(0)}%`;
    gameContainer.setAttribute("data-before", discount);
  }
  const discountPrice = document.createElement("p");
  discountPrice.classList.add("price-tag");
  priceContainer.append(discountPrice);
  discountPrice.textContent = `$${priceNow}`;

  gameContent.append(nameAndGenre, priceContainer);
  container.append(gameContainer);
}
