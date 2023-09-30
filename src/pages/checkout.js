import summaryItem from "../cart/checkout/summaryItem.js";
import switchText from "../effects/switchText.js";
import shipmentPay from "../cart/checkout/shipmentPay.js";

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

const getPrevGames = localStorage.getItem("cartItems");
const cartGames = JSON.parse(getPrevGames);

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
  console.log(borderBottom);
  borderBottom.forEach((border) => (border.style.borderColor = "#f293c7"));

  setTimeout(() => {
    shipmentPay(mainContentContainer);
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
        shipText.textContent = "Finished!";
        shipContainer.style.position = "static";
      }, 3200);
    });
  }, 3200);
});
