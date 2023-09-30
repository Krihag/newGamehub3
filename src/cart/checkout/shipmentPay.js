export default function shipmentPay(container) {
  const shippingForm = document.createElement("form");
  shippingForm.classList.add("shipping-options-form");

  const shippingText = document.createElement("p");
  shippingText.classList.add("shipping-text");
  shippingText.textContent = "Shipping options";

  const option1 = document.createElement("div");
  option1.classList.add("radio-option-1");
  const label1 = document.createElement("label");
  label1.textContent = "Normal shipping (4-7 days) - FREE";
  label1.value = 0;
  const radio1 = document.createElement("input");
  radio1.type = "radio";
  radio1.name = "shipping-option";
  radio1.checked = "checked";

  const option2 = document.createElement("div");
  option2.classList.add("radio-option-2");
  const label2 = document.createElement("label");
  label2.textContent = "Express shipping (1-3 days) - $9.99";
  label2.value = 9.99;
  const radio2 = document.createElement("input");
  radio2.type = "radio";
  radio2.name = "shipping-option";

  option1.appendChild(radio1);
  option1.appendChild(label1);

  option2.appendChild(radio2);
  option2.appendChild(label2);

  shippingForm.appendChild(shippingText);
  shippingForm.appendChild(option1);
  shippingForm.appendChild(option2);

  container.appendChild(shippingForm);

  // FORM 2

  const paymentForm = document.createElement("form");
  paymentForm.classList.add("payment-form");

  const paymentHeader = document.createElement("label");
  paymentHeader.classList.add("shipping-text");
  paymentHeader.textContent = "Payment details";

  const cardName = document.createElement("input");
  cardName.type = "text";
  cardName.classList.add("input-detail");
  cardName.placeholder = "Cardholders name:";

  const cardNumber = document.createElement("input");
  cardNumber.type = "text";
  cardNumber.classList.add("input-detail");
  cardNumber.placeholder = "Card number:";

  const expAndCcv = document.createElement("div");
  expAndCcv.classList.add("exp-and-ccv");

  const expDate = document.createElement("input");
  expDate.type = "text";
  expDate.classList.add("input-detail");
  expDate.classList.add("exp-date");
  expDate.placeholder = "Exp date (MM/YY):";

  const cardCcv = document.createElement("input");
  cardCcv.type = "text";
  cardCcv.classList.add("input-detail");
  cardCcv.classList.add("card-ccv");
  cardCcv.placeholder = "CVC / CCV:";

  const payNowBtn = document.createElement("button");
  payNowBtn.classList.add("button");
  payNowBtn.classList.add("pink-btn");
  payNowBtn.classList.add("pay-now-btn");
  payNowBtn.textContent = "Pay now";

  expAndCcv.appendChild(expDate);
  expAndCcv.appendChild(cardCcv);

  paymentForm.appendChild(paymentHeader);
  paymentForm.appendChild(cardName);
  paymentForm.appendChild(cardNumber);
  paymentForm.appendChild(expAndCcv);
  paymentForm.appendChild(payNowBtn);

  container.appendChild(paymentForm);
}
