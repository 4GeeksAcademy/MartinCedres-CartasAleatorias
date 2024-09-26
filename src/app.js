/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //arreglo numero cartas
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  //arreglo palos cartas
  let palos = ["♦", "♥", "♠", "♣"];

  //funcion para obtener un numero de carta aleatorio
  function numeroAleatorio(arreglo) {
    let indiceAleatorio = Math.floor(Math.random() * arreglo.length);
    return arreglo[indiceAleatorio];
  }

  //funcion para obtener un palo de carta aleatorio
  function paloAleatorio(arreglo) {
    let indiceAleatorio = Math.floor(Math.random() * arreglo.length);
    return arreglo[indiceAleatorio];
  }

  //selecciono numero aleatorio
  let numeroSeleccionado = numeroAleatorio(numeros);

  //selecciono palo aleatorio
  let paloSeleccionado = paloAleatorio(palos);

  console.log(numeroSeleccionado + paloSeleccionado);
  document.querySelector(".numero").innerHTML = numeroSeleccionado;
  document.querySelector(".paloArriba").innerHTML = paloSeleccionado;
  document.querySelector(".paloAbajo").innerHTML = paloSeleccionado;

  //asignar color
  let color =
    paloSeleccionado === "♦" || paloSeleccionado === "♥" ? "rojo" : "negro";
  document.querySelectorAll(".paloArriba, .paloAbajo").forEach(element => {
    element.classList.add(color);
  });
};
