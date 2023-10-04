export default function cartPageBtns(page) {
  const container = document.createElement("div");
  container.classList.add("cart-page-btns");
  container.classList.add(`page-${page}`);
  container.dataset.value = page;

  const prevPage = document.createElement("button");
  prevPage.classList.add("prev-btn");
  prevPage.textContent = " < ";
  const pageNumb = document.createElement("p");
  pageNumb.textContent = page;
  const nextPage = document.createElement("button");
  nextPage.textContent = " > ";
  nextPage.classList.add("next-btn");
  console.log(page);

  container.append(prevPage, pageNumb, nextPage);

  return container;
}
