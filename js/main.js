//Constantes

const buttonSubmit = document.querySelector(".js-button");
const inputNumber = document.querySelector(".js-inputNumber");
const randomNumber = Math.ceil(Math.random() * 100);

//Funciones

const getRandomNumber = () => {
  console.log(`El número aleatorio es: ${randomNumber}`);
};
getRandomNumber();

const checkNumber = () => {
  //Crear div para añadir el mensaje
  let p = document.createElement("p");
  p.classList.add("message");
  const form = document.querySelector(".form");

  //Añadir el div al formulario
  form.appendChild(p);

  let message = "";

  //Validar
  if (!inputNumber.value || inputNumber.value > 100) {
    message = `El número debe estar entre 1 y 100`;
  } else if (inputNumber.value > randomNumber) {
    message = "Demasiado alto";
  } else if (inputNumber.value < randomNumber) {
    message = "Demasiado bajo";
  } else {
    message = `¡Has acertado!`;
  }

  let $text = document.createTextNode(message);
  p.appendChild($text);
};

const counterMessage = () => {
  let p = document.createElement("p");
  p.classList.add("counter__message");
  const form = document.querySelector(".form");
  form.appendChild(p);

  const $text = document.createTextNode(`Número de intentos ${acc}`);
  p.appendChild($text);
};

let acc = 0;
const addCounter = () => {
  acc += 1;
  const arrayNumbers = [];
  arrayNumbers.push(inputNumber.value);
  cleanCounter();
  counterMessage();
};

function cleanCounter() {
  //Seleccionar las cards para poder eliminarlas
  const $counterMessage = document.querySelectorAll(".counter__message");

  for (const p of $counterMessage) {
    p.remove();
  }
}

function cleanValidation() {
  //Seleccionar las cards para poder eliminarlas
  const $ValidationMessage = document.querySelectorAll(".message");

  for (const p of $ValidationMessage) {
    p.remove();
  }
}

function handlerClickButton(ev) {
  ev.preventDefault();
  addCounter();
  cleanValidation();
  checkNumber();
}

//Eventos

buttonSubmit.addEventListener("click", handlerClickButton);
