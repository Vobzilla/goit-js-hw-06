/** @format */

const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements[0].value;
  const password = formElements[1].value;

  const formData = {
    mail,
    password,
  };

  if (mail === "" || password === "") {
    return alert("Всі поля повинні бути заповнені!!!!");
  }
  console.log(formData);
  event.currentTarget.reset();
}
