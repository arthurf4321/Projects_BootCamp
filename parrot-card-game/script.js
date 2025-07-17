numeroDeCartas = null;

while(numeroDeCartas === null) {
numeroDeCartas = parseInt(prompt("Quantas cartas vc quer na sua partida?"))

    if (verficarNumeroDeCartas(numeroDeCartas)) {
        numeroDeCartas;
    } else {
        alert("O numero de cartas deve ser entre 4 e 14");
        numeroDeCartas = null;
    }
}

function verficarNumeroDeCartas(numeroDeCartas){
    if (numeroDeCartas >= 4 && numeroDeCartas <= 14) {
        if(numeroDeCartas % 2 === 0){
        return true;
        }    
    } else {
        return false;
    }
}

let numeroDeCartasDivididas = numeroDeCartas / 2;
let paresDeCartas = ["carta1" , "carta2" ,"carta3" ,"carta4" ,"carta5" ,"carta6" ,"carta7"]
let cartas = paresDeCartas.slice(0, numeroDeCartasDivididas);
let cartasFinais = duplicarCartas(cartas);

function duplicarCartas(cartas){
    let resultado = [];

    for(let i of cartas){
        resultado.push(i);
        resultado.push(i);  
        }
        
    resultado.sort(() => Math.random() - 0.5);
    return resultado;
}

const gameBoard = document.getElementById("game-board");

cartasFinais.forEach((cartaFinal) => {
    const carta = document.createElement("img")
    carta.alt = cartaFinal;
    carta.src = "imagens/" + cartaFinal + ".jpg";
    carta.classList.add("estilo-cartas");
    gameBoard.appendChild(carta);
})
