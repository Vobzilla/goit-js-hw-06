/** @format */

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  event.currentTarget.value.length <= 6
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
}
