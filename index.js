const valorPrevio = document.querySelector(".calculator__operation");
const valorActual = document.querySelector(".calculator__result");
const numeros = document.querySelectorAll(".numero");
const operadores = document.querySelectorAll(".operation");
const borrarTodo = document.querySelector(".borrarTodo");
const borrar = document.querySelector(".borrar");

const display = new Display(valorActual, valorPrevio);

numeros.forEach((numero) => {
  numero.addEventListener("click", () => {
    display.agregarNumero(numero.textContent);
  });
});

operadores.forEach((operador) => {
  operador.addEventListener("click", () => {
    display.computar(operador.value);
  });
});

borrarTodo.addEventListener("click", () => {
  display.borrarTodo();
});

borrar.addEventListener("click", () => {
  display.borrar();
});
