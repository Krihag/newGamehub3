import summaryItem from "../cart/checkout/summaryItem.js";
import switchText from "../effects/switchText.js";
import shipmentPay from "../cart/checkout/shipmentPay.js";
import checkoutComplete from "../cart/checkout/checkoutComplete.js";

const itemsContainer = document.querySelector(".cart-items-container");
const moveShip = document.querySelector(".checkout-ship");
const shipText = document.querySelector(".ship-text");
const paymentBtn = document.querySelector(".to-payment-btn");
const main = document.querySelector("main");
const orderSummary = document.querySelector(".order-summary-section");
const mainContentContainer = document.querySelector(
  ".checkout-forms-container"
);
const shipContainer = document.querySelector(".ship-full-container ");
const subTotalContainer = document.querySelector(".subtotal-price");
const totalPriceContainer = document.querySelector(".total-price");
const shipPrice = document.querySelector(".shipping-price");

const getPrevGames = localStorage.getItem("cartItems");
const cartGames = JSON.parse(getPrevGames);
const getSubtotal = localStorage.getItem("totalCart");
const subtotal = JSON.parse(getSubtotal).toFixed(2);

subTotalContainer.textContent = "$" + subtotal;
totalPriceContainer.textContent = "$" + subtotal;

let textInterval = switchText(shipText, ["Personal Info", "Step one!"], 5000);

cartGames.forEach((game) => summaryItem(game, itemsContainer));

paymentBtn.addEventListener("click", function (e) {
  e.preventDefault();
  clearInterval(textInterval);
  shipText.textContent = "";
  mainContentContainer.innerHTML = "";
  shipContainer.style.position = "fixed";

  moveShip.style.transform = "translateX(12.5rem)";
  main.style.backgroundColor = "#FFCDF1";
  orderSummary.style.backgroundColor = "#f9bbe8";
  const borderBottom = document.querySelectorAll(".border-bottom");

  borderBottom.forEach((border) => (border.style.borderColor = "#f293c7"));

  setTimeout(() => {
    shipmentPay(mainContentContainer);
    const paymentTotalPrice = document.querySelector(".pay-total-price span");
    paymentTotalPrice.textContent = "$" + subtotal;

    const radioBtns = document.querySelectorAll(".radio-options");
    radioBtns.forEach((btn) =>
      btn.addEventListener("change", (e) => {
        const updatedPrice = Number(subtotal) + Number(e.target.dataset.price);
        shipPrice.textContent = "$" + e.target.dataset.price;
        totalPriceContainer.textContent = "$" + updatedPrice.toFixed(2);
        paymentTotalPrice.textContent = "$" + updatedPrice.toFixed(2);
      })
    );
    shipContainer.style.position = "static";

    textInterval = switchText(
      shipText,
      ["Shipping & Payment", "Almost done!"],
      5000
    );

    const payNowBtn = document.querySelector(".pay-now-btn");

    payNowBtn.addEventListener("click", function (e) {
      e.preventDefault();
      mainContentContainer.innerHTML = "";
      clearInterval(textInterval);
      shipText.textContent = "";
      shipContainer.style.position = "fixed";
      moveShip.style.transform = "translateX(25.5rem)";
      orderSummary.style.transform = "translateX(102%)";
      main.style.backgroundColor = "#FEE9D6";

      setTimeout(() => {
        textInterval = switchText(
          shipText,
          ["Finished!", "Order Successful"],
          5000
        );
        shipContainer.style.position = "static";

        checkoutComplete(mainContentContainer);
        orderSummary.style.display = "none";
      }, 3200);
    });
  }, 3200);
});
