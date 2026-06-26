/* 
 Crie um botão com nome de Adicionar.
2 - Adicione uma função (somar) ao clique desse botão
3 - Só adicione a função se o botão existir na tela.
4 - Crie uma div com o texto 0 dentro dela: <div>0</div>
5 - Na função do botão, pegue o total que estiver dentro da div e adicione + 1.
6 - Mude o valor da div para o novo total.
7 - Mude o valor apenas se o total for menor que 10.
8 - Quando não for mais possível adicionar, mostre uma mensagem no console.
*/

// 1. Seleciona o botão e a div do contador
const botao = document.querySelector("#adicionar");
const contador = document.querySelector("#contador");

// 2. Cria a função somar
function somar() {
  // 5. Pega o texto que está dentro da div e transforma em um Número inteiro (parseInt)
  let total = parseInt(contador.innerText);
  // 7. Só muda o valor se o total atual for menor que 10
  if (total < 10) {
    total = total + 1; // Adiciona +1 ao total
    // 6. Mude o valor da div para o novo total
    contador.innerText = total;
  } else {
    // 8. Quando não for mais possível adicionar (chegou em 10), mostra mensagem no console
    console.log("Não é possível adicionar mais. O limite de 10 foi atingido!");
  }
}
// 3. Só adiciona a função ao clique se o botão existir na tela
if (botao) {
  botao.addEventListener("click", somar);
}

/* Explicação dos pontos mais importantes:

if (botao): No ponto 3, o exercício pede para só adicionar o evento se o botão existir. Se o document.querySelector não encontrar o botão, a variável botao fica como null. Esse if checa: "Se o botão existir (não for null), então adicione o ouvinte de clique". Isso evita erros no código!

parseInt(contador.innerText): Tudo o que pegamos do HTML via innerText ou innerHTML vem como formato de texto (String). Se você tentasse fazer "0" + 1, o JavaScript iria juntar os textos e viraria "01". O parseInt() transforma o texto "0" no número 0 de verdade para podermos fazer a conta matemática.

total < 10: A trava de segurança. Ele checa o valor antes de somar. Se o contador estiver em 9, ele entra no if, soma +1 (vira 10) e atualiza a tela. Na próxima vez que clicar, o total já vai ser 10, então ele pula direto para o else e exibe a mensagem no console. */
