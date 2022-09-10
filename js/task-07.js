/** @format */

const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputСhangeSize);

const value = inputEl.value;
const textSize = (textEl.style.fontSize = `${value}px`);

function onInputСhangeSize() {
  const value = inputEl.value;
  textEl.style.fontSize = `${value}px`;
}
