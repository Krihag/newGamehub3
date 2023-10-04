import cartPageBtns from "./displayCart/cartPageBtns.js";

export default function displayNewItem(cartItem, allItems) {
  const length = allItems.length;
  let curPage;

  if (length === 1) {
    curPage = document.createElement("div");
    curPage.classList.add("page-1");
  } else if (allItems.length < 4) {
    curPage = document.querySelector(".page-1");
  } else if (length === 4) {
    curPage = document.createElement("div");
    const page1 = cartPageBtns(1);
    const page2 = cartPageBtns(2);
    page2.style.display = "none";
    // Add appends for page 1-2 before bracket ends
  } else if (length < 7) {
    curPage = document.querySelector(".page-2");
  } else if (length === 7) {
    curPage = document.createElement("div");
    const page3 = cartPageBtns(3);
    page3.style.display = "none";
  } else if (length < 10) {
    curPage = document.querySelector(".page-2");
  } else if (length === 10) {
    curPage = document.createElement("div");
    const page4 = cartPageBtns(3);
    page4.style.display = "none";
  }
}
// const BtnsContainer = cartPageBtns(cartPage, page1, cartItemsContainer);
// page2.appendChild(cartPageBtns(cartPage, cartItemsContainer));
// page1.appendChild(BtnsContainer);
