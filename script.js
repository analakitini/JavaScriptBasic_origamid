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
