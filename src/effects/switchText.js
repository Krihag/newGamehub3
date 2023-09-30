let i = 1;

export default function switchText(element, words, swapTime) {
  element.textContent = words[0];
  return window.setInterval(() => {
    element.textContent = words[i];
    i = ++i % words.length;
  }, swapTime);
}
