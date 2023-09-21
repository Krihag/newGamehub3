const letters = "abcdefghijklmnopqrstuvwxyz";

const word = document.querySelector("h1");

function resetText() {
  let iterations = 0;

  const interval = setInterval(() => {
    word.innerText = word.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) return word.dataset.value[index];
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= word.dataset.value.length) {
      clearInterval(interval);
      setTimeout(resetText, 7000);
    }

    iterations += 1 / 13;
  }, 35);
}
resetText();
