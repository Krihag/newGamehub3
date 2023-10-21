import hamburgerMenu from "./effects/hamburgerMenu.js";
import displayCart from "./cart/displayCart/displayCart.js";
import fetchGames from "./games/fetchGames.js";

const footerBtn = document.querySelector(".subscribe-button");
const footerInput = document.querySelector(".footer-input");
const newsText = document.querySelector(".newsletter-subtext");
const cartItems = document.querySelector(".cart-open");
const searchInput = document.querySelector(".search-bar");
const searchResult = document.querySelector("#list");

const games = await fetchGames();

const getPrevGames = localStorage.getItem("cartItems");
let gamesPrevAdded = JSON.parse(getPrevGames);
if (gamesPrevAdded && gamesPrevAdded.length > 0) {
  const totalItems = gamesPrevAdded.reduce((acc, cur) => {
    return acc + Number(cur.quantity);
  }, 0);

  cartItems.classList.add("cart-number-items");
  cartItems.style.setProperty("--cart-content", "'" + totalItems + "'");
}

footerBtn.addEventListener("click", function (e) {
  const inputVal = footerInput.value;
  footerInput.style.display = "none";

  footerBtn.style.width = "100%";
  footerBtn.textContent = "You are now subscribed";
  footerBtn.style.background = "#a3ec4c";
  newsText.textContent = `Confirmation email will be sent to: ${inputVal}`;
  footerBtn.style.transition = ".5s ease-in";
});
hamburgerMenu();

displayCart();

// SEARCH BAR

const url = window.location.href;
const indexPage = url.includes("index.html");

const searchItems = games.map((game) => {
  const container = document.createElement("a");
  const gameDescript = `description.html?id=${game.id}`;
  container.href = indexPage ? "html/" + gameDescript : gameDescript;
  container.dataset.name = game.name.toLowerCase();
  container.classList.add("search-item");
  container.textContent = `${game.name.split(" ").slice(0, 2).join(" ")} - 
   ${game.attributes[0].terms[0].name}`;
  container.style.display = "none";

  searchResult.appendChild(container);
  return container;
});

searchInput.addEventListener("input", (e) => {
  let value = e.target.value;

  if (value && value.trim().length > 0) {
    value = value.trim().toLowerCase();
    findItem(value);
  } else {
    clearList();
  }
});

const findItem = function (value) {
  searchItems.filter((item) => {
    if (item.dataset.name.includes(value)) {
      console.log("test");
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};

function clearList() {
  searchItems.forEach((item) => (item.style.display = "none"));
}
