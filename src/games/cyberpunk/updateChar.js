const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
const charDesc = document.querySelector(".cyber-description");
const charName = document.querySelector(".cyber-name");
const buyBtn = document.querySelector(".cyber-buy-btn");

let typeWriter;

export default function updateCharacters(character) {
  leftArrow.classList.toggle(character.className);
  rightArrow.classList.toggle(character.className);

  if (character.active) {
    if (typeWriter) clearInterval(typeWriter);
    charName.innerHTML = "";
    buyBtn.style.background = character.btnColor;

    charName.style.color = character.btnColor;
    charDesc.textContent = character.description;

    charName.textContent;

    let index = 0;

    const text = character.name.slice(1);
    charName.textContent = character.name[0];
    typeWriter = setInterval(() => {
      charName.textContent += text[index];
      index += 1;

      if (index > text.length - 1) {
        clearInterval(typeWriter);
      }
    }, 350);
  }
}
