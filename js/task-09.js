/** @format */
const buttonEl = document.querySelector(".change-color");
const textColorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

buttonEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  textColorEl.textContent = randomColor;
  bodyEl.style.backgroundColor = randomColor;
}
