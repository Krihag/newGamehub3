const footerBtn = document.querySelector(".subscribe-button");
const footerInput = document.querySelector(".footer-input");
const newsText = document.querySelector(".newsletter-subtext");

footerBtn.addEventListener("click", function (e) {
  const inputVal = footerInput.value;
  footerInput.style.display = "none";

  footerBtn.style.width = "100%";
  footerBtn.textContent = "You are now subscribed";
  footerBtn.style.background = "#a3ec4c";
  newsText.textContent = `Confirmation email will be sent to: ${inputVal}`;
  footerBtn.style.transition = ".5s ease-in";
});
