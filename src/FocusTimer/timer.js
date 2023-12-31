import state from "./state.js";
import * as elements from "./elements.js";

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    // A função pad adiciona um caracter ao inicio ou ao fim da string
    // dependendo da quantidade de caracters definida. Neste caso 2 caracteres
    // adicionando 0 ao inicio se ele não possuir 2 caracteres
    elements.minutes.textContent = String(minutes).padStart(2, "0");
    elements.seconds.textContent = String(seconds).padStart(2, "0");
}