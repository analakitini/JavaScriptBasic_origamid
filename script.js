/*Manipulating the DOM*/
const nav = document.querySelector("nav");
const produtos = document.querySelector(".produtos a");
console.log(nav);
console.log(produtos);

console.log(produtos.href);
console.dir(nav);
nav.style.backgroundColor = "blue";
nav.style.padding = "10px";
nav.classList.add("menu");

/*Strings*/

const text = "JavaScript";
const frase = 'This is my "game"';
console.log(text + " " + frase);

/*Number*/

let total = 0;
const compras = 30;
const imposto = 10;

total = compras + imposto;

const dobro = total * 2;
const dividir = total / 2;
const desconto = total - 30;
const strings = "20" + "20";
const numbers = 20 + 20;

const transformar = Number("20") + 20;

console.log(numbers);
console.log(transformar);

/*Objects */

const nome = "The Lord of the Rings";
const ano = 1954;
const autor = "J.R.R. Tolkien";

const nomeFilme = "The Lord of the Rings";
const anoFilme = 2001;
const diretorFilme = "Peter Jackson";

const livro = {
  nome: "The Lord of the Rings",
  ano: 1954,
  autor: "J.R.R. Tolkien",
  editora: "Allen & Unwin",
};

const filme = {
  nome: "The Lord of the Rings",
  ano: 2001,
  autor: "J.R.R. Tolkien",
  diretor: "Peter Jackson",
};

console.log(2022 - livro.ano);
console.log(filme.nome + " " + filme.diretor);
console.log(livro.nome === nome);

const texto = document.querySelector("p");

console.log(texto.clientHeight);
console.log(autor.toLocaleUpperCase());
console.log(autor.toLocaleLowerCase());
const decimal = 122.99;

console.log(decimal.toFixed()); /*String */
console.log(3); /*Number */
