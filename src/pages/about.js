import transformText from "../effects/transformText.js";
import hamburgerMenu from "../effects/hamburgerMenu.js";
import displayCart from "../cart/displayCart.js";

const headerText = document.querySelector("h1");

transformText(headerText, 7000);

hamburgerMenu();
displayCart();
