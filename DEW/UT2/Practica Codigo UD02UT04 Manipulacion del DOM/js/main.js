import { atacar, reiniciarJuego } from './metodos.js';

document.addEventListener("DOMContentLoaded", () => {
    const iniciarBtn = document.getElementById("btn-start");
    const limpiarBtn = document.getElementById("btn-clear");
    const registroDiv = document.getElementById("log");
    const p1Btn = document.getElementById("btn-p1");
    const p2Btn = document.getElementById("btn-p2");

    iniciarBtn.onclick = () => {
        reiniciarJuego();
        registroDiv.innerHTML = '<p class="muted">Sin eventos. El combate no ha empezado.</p>';
    };

    limpiarBtn.onclick = () => {
        registroDiv.innerHTML = '<p class="muted">Sin eventos. El combate no ha empezado.</p>';
    };

    p1Btn.onclick = () => {
        const resultado = atacar(1);
        registroDiv.innerHTML += `<p>${resultado}</p>`;
    };

    p2Btn.onclick = () => {
        const resultado = atacar(2);
        registroDiv.innerHTML += `<p>${resultado}</p>`;
    };
});
