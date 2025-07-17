let numeroDeCartas = null;
const gameBoard_front = document.getElementById("front-gameBoard");

let primeiraCarta = null;
let bloqueio = false;
let jogadas = 0;

// Pergunta ao usuário até um número válido
while(numeroDeCartas === null) {
  numeroDeCartas = parseInt(prompt("Quantas cartas você quer na sua partida? (pares entre 4 e 14)"));

  if (!verificarNumeroDeCartas(numeroDeCartas)) {
    alert("Número inválido. Deve ser par e entre 4 e 14.");
    numeroDeCartas = null;
  }
}

function verificarNumeroDeCartas(num) {
  return num >= 4 && num <= 14 && num % 2 === 0;
}

const totalDeCartas = numeroDeCartas;

const paresDeCartas = ["carta1" , "carta2" ,"carta3" ,"carta4" ,"carta5" ,"carta6" ,"carta7"];

let cartas = paresDeCartas.slice(0, numeroDeCartas / 2);

let cartasFinais = duplicarCartas(cartas);

function duplicarCartas(cartas) {
  let resultado = [];
  for(let carta of cartas){
    resultado.push(carta);
    resultado.push(carta);
  }
  // Embaralha as cartas
  return resultado.sort(() => Math.random() - 0.5);
}

// Cria as cartas no tabuleiro
cartasFinais.forEach((cartaFinal) => {
  const carta = document.createElement("img");
  carta.alt = cartaFinal;
  carta.src = "imagens/fundo.jpg";
  carta.classList.add("back-cartas");

  carta.addEventListener("click", () => {
    if(bloqueio || carta.classList.contains("virada")) return;

    // "Vira" a carta
    carta.src = `imagens/${cartaFinal}.jpg`;
    carta.classList.add("virada");

    verificarCartas(carta);
  });

  gameBoard_front.appendChild(carta);
});

function verificarCartas(carta) {
  if (bloqueio) return;

  jogadas++;

  if (primeiraCarta === null) {
    primeiraCarta = carta;
  } else {
    if (primeiraCarta.alt === carta.alt) {
      // Par correto: limpa para a próxima jogada
      primeiraCarta = null;
    } else {
      // Par errado: bloqueia cliques e vira as cartas para trás após 1s
      bloqueio = true;
      setTimeout(() => {
        primeiraCarta.src = "imagens/fundo.jpg";
        carta.src = "imagens/fundo.jpg";
        primeiraCarta.classList.remove("virada");
        carta.classList.remove("virada");
        primeiraCarta = null;
        bloqueio = false;
      }, 1000);
    }
  }

  // Verifica se todas as cartas foram viradas
  const cartasViradas = document.querySelectorAll(".virada");
  if (cartasViradas.length === totalDeCartas) {
    setTimeout(() => {
      alert(`Você ganhou em ${jogadas} jogadas!`);
    }, 500);
  }
}