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