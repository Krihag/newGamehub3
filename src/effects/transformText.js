const letters = "abcdefghijklmnopqrstuvwxyz";

export default function transformText(word, resetTimer) {
  let iterations = 0;

  word.dataset.value = word.textContent;

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
      setTimeout(() => {
        transformText(word, resetTimer);
      }, resetTimer);
    }

    iterations += 1 / 13;
  }, 35);
}
