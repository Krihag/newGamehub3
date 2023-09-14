import fetchGames from "./games/fetchGames.js";

const bestSellers = document.querySelector(".bestseller-container");
const articleSlides = document.querySelectorAll(".article-slide");

const games = await fetchGames();

const featuredGames = [games[3], games[4], games[6]];

articleSlides.forEach((slide, i) => {
  slide.querySelector("h3").textContent = featuredGames[i].title;
  slide.querySelector(".article-description").textContent =
    featuredGames[i].description;
  slide.querySelector(".article-genre").textContent = featuredGames[i].genre;
  slide.querySelector(".article-release").textContent =
    featuredGames[i].released;
  slide.querySelector(
    ".article-price"
  ).textContent = `$${featuredGames[i].discountedPrice}`;
});

// bestsellers

// games.forEach(
//   (game) =>
//     (bestSellers.innerHTML += `   <a href="#" class="game-cover">
// <img src="${game.image}" alt="${game.description}" />
// <div class="game-content">
//   <div class="name-and-genre">
//     <p class="game-name">${game.title}</p>
//     <p class="game-genre">${game.genre}</p>
//   </div>

//   <div class="price">
//     <p class="old-price">$${game.price}</p>
//     <p class="sale-price">$${game.discountedPrice}</p>
//   </div>
// </div>
// </a>`)
// );

for (let i = 0; i < 4; i++) {
  const game = games[i];
  bestSellers.innerHTML += `   <a href="#" class="game-cover">
<img src="${game.image}" alt="${game.description}" />
 <div class="game-content">
   <div class="name-and-genre">
     <p class="game-name">${game.title}</p>
     <p class="game-genre">${game.genre}</p>
   </div>

   <div class="price">
     <p class="old-price">$${game.price}</p>
     <p class="sale-price">$${game.discountedPrice}</p>
   </div>
 </div>
 </a>`;
}
