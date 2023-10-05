import cartItem from "../cartItem.js";
import cartPageBtns from "./cartPageBtns.js";

export default function cartPages(allItems, container, perPage = 3) {
  container.innerHTML = "";

  let pageNumber = 1;
  let index = 0;
  const allPages = [];
  let curPage;

  allPages.push(createPage(pageNumber));
  curPage.style.display = "block";

  function createPage(pageNum) {
    const page = document.createElement("div");
    page.classList.add(`page-${pageNum}`);
    page.classList.add("cart-page");
    page.style.display = "none";
    container.append(page);
    page.append(cartPageBtns(pageNum));
    curPage = page;
    return page;
  }

  allItems.forEach((item) => {
    if (index === perPage) {
      pageNumber++;
      allPages.push(createPage(pageNumber));
      index = 0;
    }

    curPage.prepend(item);
    index++;
  });

  const prevPageBtns = document.querySelectorAll(".prev-btn");
  const nextPageBtns = document.querySelectorAll(".next-btn");

  let currentPage = 1;

  function showPage(nextPage) {
    const pages = container.querySelectorAll(".cart-page");
    pages.forEach((page) => {
      page.style.display = "none";
    });
    const currentPageElement = container.querySelector(`.page-${nextPage}`);
    currentPageElement.style.display = "block";
    currentPage = nextPage;
  }
  prevPageBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      if (currentPage === 1) return;
      showPage(currentPage - 1);
    });
  });

  nextPageBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      if (currentPage >= allPages.length) return;
      showPage(currentPage + 1);
    });
  });
}
