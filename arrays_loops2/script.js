/* Usando o forEach para percorrer a lista */

/* const lista = ["JavaScript", "hTML", "CSS", "PHP"];
const body = document.querySelector("body");

function adicionarBody(item) {
  body.innerHTML += "<li>" + item + "</li>";
}

lista.forEach(adicionarBody); */

/* querySelectorAll retorna uma lista de elementos, que podem ser percorridos com o forEach. */

/* const links = document.querySelectorAll("nav a");

console.log(links); */

/* Métodos e Propiedades de uma array */

const lista = ["JavaScript", "HTML", "CSS"];

// retorna o total
const total = lista.length;

// remove o último
const ultimo = lista.pop();

// remove o primeiros
const primeiro = lista.shift();

// adiciona ao final
lista.push("PHP");

console.log(lista);
