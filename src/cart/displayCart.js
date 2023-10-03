import cartItem from "./cartItem.js";
import updateCart from "./updateCart.js";
import cartPageBtns from "./checkout/cartPageBtns.js";

export default function displayCart() {
  const fullCartContainer = document.querySelector(".cart-container");
  const cartItemsContainer = document.querySelector(".cart-items-container");
  const totalPriceContainer = document.querySelector(".cart-total span");
  const cartIcon = document.querySelector(".shopping-cart-icon");
  const shopMoreBtn = document.querySelector(".shop-more");

  const getPrevGames = localStorage.getItem("cartItems");
  let gamesPrevAdded = JSON.parse(getPrevGames);

  const cartItemsList = gamesPrevAdded.map((game) => cartItem(game));
  console.log(cartItemsList);

  const page1 = document.createElement("div");
  const page2 = document.createElement("div");
  const page3 = document.createElement("div");
  const page4 = document.createElement("div");

  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";

  let cartPage = 1;

  cartItemsList.forEach((item, i) => {
    if (i <= 2) page1.appendChild(item);
    else if (i <= 5) {
      if (i === 3) {
        const BtnsContainer = cartPageBtns(cartPage, page1, cartItemsContainer);
        cartPage++;
        page2.appendChild(cartPageBtns(cartPage));
        page1.appendChild(BtnsContainer);
      }
      page2.appendChild(item);
    } else if (i <= 8) {
      if (i === 6) {
        cartPage++;
        page3.appendChild(cartPageBtns(cartPage));
      }

      page3.appendChild(item);
    } else if (i > 8) {
      if (i === 9) {
        cartPage++;
        page4.appendChild(cartPageBtns(cartPage));
      }

      page4.appendChild(item);
    }
  });

  cartItemsContainer.append(page1, page2, page3, page4);

  const prevPageBtns = document.querySelectorAll(".prev-btn");
  const nextPageBtns = document.querySelectorAll(".next-btn");

  let currentPage = 1;
  prevPageBtns.forEach((btn, i) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      if (currentPage === 1) return;
      const parent = e.target.parentElement.parentElement.parentElement;

      const oldPage = parent.querySelector(
        `.page-${currentPage}`
      ).parentElement;
      currentPage--;

      const newPage = parent.querySelector(
        `.page-${currentPage}`
      ).parentElement;
      oldPage.style.display = "none";
      newPage.style.display = "block";
    });
  });

  nextPageBtns.forEach((btn, i) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      if (currentPage >= cartPage) return;
      const parent = e.target.parentElement.parentElement.parentElement;

      const oldPage = parent.querySelector(
        `.page-${currentPage}`
      ).parentElement;
      currentPage++;
      const newPage = parent.querySelector(
        `.page-${currentPage}`
      ).parentElement;
      oldPage.style.display = "none";
      newPage.style.display = "block";
    });
  });

  const totalSum = gamesPrevAdded.reduce((acc, cur) => {
    const itemSum = cur.price * cur.quantity;
    return acc + itemSum;
  }, 0);
  totalPriceContainer.textContent = "$" + totalSum.toFixed(2);

  localStorage.setItem("totalCart", totalSum);

  cartIcon.addEventListener("click", function (e) {
    e.preventDefault();
    fullCartContainer.classList.toggle("cart-visibility");
    // gamesPrevAdded.forEach((game) => updateCart(game));
  });
  shopMoreBtn.addEventListener("click", function (e) {
    e.preventDefault();
    fullCartContainer.classList.toggle("cart-visibility");
  });
}
