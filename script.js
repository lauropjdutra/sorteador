// Elementos do DOM
const button = document.querySelector(".draw-button");
const input = document.querySelector(".input-max");

// INÍCIO DA FUNÇÃO CALC
function calc() {
  const min = Math.ceil(document.querySelector(".input-min").value)
  const max = Math.floor(document.querySelector(".input-max").value)
  const result = Math.floor(Math.random() * (max - min + 1) ) + min
  return result
}

function showResult() {
  const box = document.querySelector(".result-display")
  const background = document.querySelector(".gradient")
  const display = document.querySelector(".result-display")
  box.style.display = "flex"
  background.style.display = "block"
  display.innerHTML = calc()
}

button.addEventListener("click", showResult);
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});