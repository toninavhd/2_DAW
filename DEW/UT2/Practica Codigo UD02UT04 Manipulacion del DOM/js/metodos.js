let vidaJugador1 = 100;
let vidaJugador2 = 100;

const stats = {
    Elfos: 100,
    Hombres: 120,
    Enanos: 110,
    Orcos: 90,
};

const armas = {
    Espada: 20,
    Arco: 15,
    Hacha: 25,
    Magia: 30,
};

export function reiniciarJuego() {
    vidaJugador1 = 100;
    vidaJugador2 = 100;
    document.getElementById("p1-hp").innerText = `${vidaJugador1} / 100`;
    document.getElementById("p1-bar").style.width = "100%";

    document.getElementById("p2-hp").innerText = `${vidaJugador2} / 100`;
    document.getElementById("p2-bar").style.width = "100%";
}

export function atacar(jugador) {
    const nombreJugador1 = document.getElementById("p1-army").value;
    const nombreJugador2 = document.getElementById("p2-army").value;
    const arma1 = document.getElementById("p1-weapon").value;
    const arma2 = document.getElementById("p2-weapon").value;

    let ataque, vidaDefensor, barraDefensora;

    if (jugador === 1) {
        ataque = armas[arma1];
        vidaDefensor = vidaJugador2;
        barraDefensora = "p2-bar";
        
        vidaJugador2 -= ataque; 
        if (vidaJugador2 < 0) vidaJugador2 = 0;
    } else {
        ataque = armas[arma2];
        vidaDefensor = vidaJugador1;
        barraDefensora = "p1-bar";

        vidaJugador1 -= ataque; 
        if (vidaJugador1 < 0) vidaJugador1 = 0;
    }

    if (jugador === 1) {
        document.getElementById("p2-hp").innerText = `${vidaJugador2} / 100`;
        document.getElementById(barraDefensora).style.width = `${(vidaJugador2 / 100) * 100}%`;
    } else {
        document.getElementById("p1-hp").innerText = `${vidaJugador1} / 100`;
        document.getElementById(barraDefensora).style.width = `${(vidaJugador1 / 100) * 100}%`;
    }

    
    if (vidaJugador1 <= 0 && vidaJugador2 <= 0) {
        return "¡Empate! Ambos jugadores han caído.";
    } else if (vidaJugador1 <= 0) {
        return `${nombreJugador2} gana la batalla!`;
    } else if (vidaJugador2 <= 0) {
        return `${nombreJugador1} gana la batalla!`;
    }

    
    return `${(jugador === 1 ? nombreJugador1 : nombreJugador2)} ataca a ${jugador === 1 ? nombreJugador2 : nombreJugador1} causando ${ataque} de daño.`;
}
