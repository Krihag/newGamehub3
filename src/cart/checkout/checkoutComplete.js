const topContainer = document.querySelector(".checkout-main-container");

export default function checkoutComplete(container) {
  const divContainer = document.createElement("div");
  divContainer.classList.add("order-complete-container");

  const mainText = document.createElement("h2");
  mainText.classList.add("thanks-for-order-text");
  mainText.textContent = "Thank you for your order";

  const orderNumbText = document.createElement("div");
  orderNumbText.classList.add("order-number-text");
  orderNumbText.textContent = "Your order number is: ";

  const orderNumber = document.createElement("span");
  orderNumber.classList.add("order-number");
  orderNumber.textContent = "005367424";

  const emailComfirm = document.createElement("p");
  emailComfirm.classList.add("email-confirm-text");
  emailComfirm.textContent =
    "You will receive a confirmation email within a few minutes.";

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("order-btn-container");

  const button1 = document.createElement("button");
  button1.classList.add("button");
  button1.classList.add("pink-btn");
  button1.textContent = "Track order";

  const button2 = document.createElement("button");
  button2.classList.add("button");

  button2.textContent = "Go to shop";

  orderNumbText.appendChild(orderNumber);

  btnContainer.append(button1, button2);

  divContainer.append(mainText, orderNumbText, emailComfirm, btnContainer);

  container.appendChild(divContainer);

  topContainer.style.width = "100%";
}
