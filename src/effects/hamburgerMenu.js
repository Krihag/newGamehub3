const hamburgerIcon = document.querySelector(".hamburger-menu");
const navPages = document.querySelector("header nav ul");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const searchBar = document.querySelector(".search-bar");

export default function hamburgerMenu() {
  function toggleMenu() {
    navPages.classList.toggle("nav-hidden");
    menuOpen.classList.toggle("nav-hidden");
    menuClose.classList.toggle("nav-hidden");
    searchBar.classList.toggle("nav-hidden");
  }
  menuOpen.addEventListener("click", toggleMenu);
  menuClose.addEventListener("click", toggleMenu);
}
