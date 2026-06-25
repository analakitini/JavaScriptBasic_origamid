/* method */

/* const curso = {
  nome: "JavaScript",
  completar() {
    console.log("Curso Completo");
  },
};

console.log(curso.nome);
curso.completar(); */

/* Event */

const ativar = document.querySelector(".ativar");

function ativarAoClique(event) {
  console.log(event.timeStamp);
}

ativar.addEventListener("click", ativarAoClique);

console.log(ativar);
