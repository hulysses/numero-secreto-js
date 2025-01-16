// alert("Boas vindas ao jogo do número secreto!");

// let numMaximo = 100;
// let numSecreto = Math.floor(Math.random() * numMaximo) + 1;
// let numInformdo;
// let numTentativas = 0;

// while (numInformdo != numSecreto) {
//   numInformdo = parseInt(prompt(`Digite um número entre 1 e ${numMaximo}:`));
//   if (numInformdo == numSecreto) {
//     alert(
//       `Parabéns! Você acertou o número secreto: ${numSecreto} em ${numTentativas} tentativa(s).`
//     );
//   } else {
//     numInformdo > numSecreto
//       ? alert("O número secreto é menor.")
//       : alert("O número secreto é maior.");
//     numTentativas++;
//   }
// }

exibirTexto = (tag, texto) => {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
};

gerarNumeroSecreto = () => {
  let numMaximo = 100;

  if (numsSorteados.length == numMaximo) {
    numsSorteados = [];
  }

  while (numSecreto === null || numsSorteados.includes(numSecreto)) {
    numSecreto = Math.floor(Math.random() * numMaximo) + 1;
  }

  numsSorteados.push(numSecreto);
};

let tentativas;
let numSecreto;
let numsSorteados = [];

novoJogo = () => {
  exibirTexto("h1", "Bem-vindo ao jogo do número secreto!");
  exibirTexto("p", "Digite um número entre 1 e 100:");
  limparCampo();

  numSecreto = null;
  gerarNumeroSecreto();
  tentativas = 1;

  document.querySelector("#reiniciar").disabled = true;
};

chutar = () => {
  let numInformado = parseInt(document.querySelector("input").value);

  if (numInformado == numSecreto) {
    exibirTexto("h1", "Parabéns!");
    exibirTexto(
      "p",
      `Você acertou o número secreto: ${numSecreto} em ${tentativas} tentativa(s).`
    );
    document.querySelector("#reiniciar").disabled = false;
  } else {
    numInformado > numSecreto
      ? exibirTexto("p", "O número secreto é menor.")
      : exibirTexto("p", "O número secreto é maior.");

    tentativas++;
  }
};

limparCampo = () => {
  document.querySelector("input").value = "";
};

novoJogo();
