const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
const charDesc = document.querySelector(".cyber-description");
const charName = document.querySelector(".cyber-name");
const buyBtn = document.querySelector(".cyber-buy-btn");

export default function updateCharacters(character) {
  leftArrow.classList.toggle(character.className);
  rightArrow.classList.toggle(character.className);
  //   character.classList.toggle("active");

  if (character.active) {
    buyBtn.style.background = character.btnColor;
    charName.textContent = character.name;
    charDesc.textContent = character.description;
    character.active = false;
  }
}
