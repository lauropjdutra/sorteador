// Elementos do DOM
const button = document.querySelector(".draw-button");
const button2 = document.querySelector("#again-button");
const input = document.querySelector(".input-max");
const box = document.querySelector(".center-display");
const background = document.querySelector(".gradient");
const display = document.querySelector(".result-display");
const currentDate = document.querySelector(".time-info");

// Cálculo do sorteio
function calc() {
  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

// Exibição do resultado
function showResult() {
  if (
    document.querySelector(".input-min").value >=
    document.querySelector(".input-max").value
  ) {
    alert("Por favor, escolha um número maior e diferente do primeiro.");
  } else {
    box.style.display = "flex";
    background.style.display = "block";
    display.innerHTML = calc();

    // Data e horário do sorteio
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hour = date.getHours();
    let year = date.getFullYear();
    let month = date.getMonth(); // beware: January = 0; February = 1, etc.
    let day = date.getDate();

    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = `0${month}`;
    }
    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    let formatDate = `${day}/${++month}/${year}`;
    let formatHour = `${hour}:${minutes}:${seconds}`;
    currentDate.innerHTML = `Sorteiro realizado em ${formatDate} às ${formatHour}`;
  }
}

button.addEventListener("click", showResult);
button2.addEventListener("click", showResult);
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});